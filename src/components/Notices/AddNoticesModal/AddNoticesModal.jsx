import Modal from "components/Modal/Modal";
import React, { useEffect, useState } from "react";
import addIcon from "../../../assets/icon/Icon_add_photo.svg";
import male from "../../../assets/icon/Male.svg";
import female from "../../../assets/icon/Female.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import {
  FormWrapper,
  InputText,
  FormInput,
  ModalFooter,
  CancelBtn,
  NextBtn,
  FormInputImg,
  FormInputText,
  AddPhoto,
  AddIcon,
  ModalText,
  Span,
  Box,
  RadioInput,
  RadioLabel,
  ImgSex,
  CategoryInut,
  CategoryLabel,
  Box2,
  Error,
} from "./AddNoticesModal.styled";
import { useDispatch } from "react-redux";
import { addNotice } from "redux/notices/notices-operations";

const ModalSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(2, "Too Short, at least 8!")
    .max(48, "Too Long, at maximum 120!"),
  name: Yup.string()
    .required()
    .matches(/^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+$/, "Invalid name")
    .min(2, "Too Short, at least 2!")
    .max(16, "Too Long, at maximum 16!"),
  breed: Yup.string()
    .required()
    .matches(/^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+$/, "Invalid breed")
    .min(2, "Too Short, at least 2!")
    .max(16, "Too Long, at maximum 16!"),
  comments: Yup.string()
    .required()
    .min(8, "Too Short, at least 8!")
    .max(120, "Too Long, at maximum 120!"),
  location: Yup.string().required(),
  price: Yup.string().when("category", {
    is: "sell",
    then: Yup.string().required(),
  }),
});

const AddNoticesModal = ({ activeModal, setActiveModal }) => {
  const [modalActive, setModalActive] = useState(activeModal);
  const [modal, setModal] = useState(1);
  const [customInput, setCustomInput] = useState(new Date());
  const [petPhoto, setPetPhoto] = useState(null);
  const [previevPet, setPrevievPet] = useState(null);
  const dispatch = useDispatch();
  const onSubmit = (value, { resetForm }) => {
    const data = new FormData();
    data.append("category", value.category);
    data.append("title", value.title);
    data.append("birthday", moment(value.birthday).format("DD.MM.YYYY"));
    data.append("breed", value.breed);
    data.append("sex", value.sex);
    if (value.location) data.append("location", value.location);
    data.append("name", value.name);
    if (value.price) data.append("price", value.price);
    if (value.comments) data.append("comments", value.comments);
    if (petPhoto) data.append("noticePhoto", petPhoto);
    dispatch(addNotice(data));
    setPetPhoto(null);
    setActiveModal(false);
    setPrevievPet(null)
    resetForm();
    setTimeout(() => {
      setModal(1);
    }, 500);
  };

  const previevFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevievPet(reader.result);
    };
  };

  const closeModal = () => {
    setActiveModal(false);
    setTimeout(() => {
      setModal(1);
    }, 500);
  };
  useEffect(() => {
    setModalActive(activeModal);
  }, [activeModal]);
  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalActive]);
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => {
    return (
      <FormInput
        onClick={onClick}
        ref={ref}
        selected={value}
        defaultValue={value}
      ></FormInput>
    );
  });

  return (
    <>
      <Modal
        title={"Add pet"}
        active={activeModal}
        setActive={setActiveModal}
        setModalClose={closeModal}
        modal={setModal}
      >
        <Formik
          initialValues={{
            category: "",
            title: "",
            name: "",
            birthday: customInput,
            breed: "",
            sex: "",
            location: "",
            price: "",
            comments: "",
            petsPhoto: "",
          }}
          validationSchema={ModalSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            setFieldValue,
          }) => {
            return (
              <FormWrapper onSubmit={handleSubmit}>
                {modal === 1 && (
                  <>
                    <ModalText htmlFor="category">
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                      sit amet, consectetur
                    </ModalText>
                    <Box2>
                      <CategoryInut
                        onChange={handleChange}
                        type="radio"
                        id="Choice1"
                        name="category"
                        value="lost-found"
                      />
                      {errors.category && touched.category ? (
                        <Error>{errors.category}</Error>
                      ) : null}
                      <CategoryLabel htmlFor="Choice1">
                        lost/found
                      </CategoryLabel>
                      <CategoryInut
                        onChange={handleChange}
                        type="radio"
                        id="Choice2"
                        name="category"
                        value="in-good-hands"
                      />
                      <CategoryLabel htmlFor="Choice2">
                        in good hands
                      </CategoryLabel>
                      <CategoryInut
                        onChange={handleChange}
                        type="radio"
                        id="Choice3"
                        name="category"
                        value="sell"
                      />
                      <CategoryLabel htmlFor="Choice3">sell</CategoryLabel>
                    </Box2>
                    <InputText htmlFor="title">
                      Tittle of ad<Span>*</Span>
                    </InputText>
                    <FormInput
                      onChange={handleChange}
                      type="text"
                      placeholder="Type name"
                      name="title"
                      value={values.title}
                      className={errors.title && touched.title ? "error" : ""}
                    />
                    {errors.title && touched.title ? (
                      <Error>{errors.title}</Error>
                    ) : null}
                    <InputText htmlFor="name">Name pet</InputText>
                    <FormInput
                      onChange={handleChange}
                      type="text"
                      placeholder="Type name pet"
                      name="name"
                      value={values.name}
                      className={errors.name && touched.name ? "error" : ""}
                    />
                    {errors.name && touched.name ? (
                      <Error>{errors.name}</Error>
                    ) : null}
                    <InputText htmlFor="birthday">Date of birth</InputText>
                    <DatePicker
                      selected={customInput}
                      type="date"
                      name="birthday"
                      onChange={(date) => {
                        setCustomInput(date);
                        return setFieldValue("birthday", date);
                      }}
                      dateFormat="dd.MM.yyyy"
                      customInput={<CustomInput />}
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      yearDropdownItemNumber={100}
                      scrollableYearDropdown
                    />
                    {errors.birthday && touched.birthday ? (
                      <Error>{errors.birthday}</Error>
                    ) : null}
                    <InputText htmlFor="breed">Breed</InputText>
                    <FormInput
                      onChange={handleChange}
                      type="text"
                      placeholder="Type breed"
                      name="breed"
                      value={values.breed}
                      className={errors.breed && touched.breed ? "error" : ""}
                    />
                    {errors.breed && touched.breed ? (
                      <Error>{errors.breed}</Error>
                    ) : null}
                    <ModalFooter>
                      <CancelBtn onClick={() => closeModal()}>Cancel</CancelBtn>
                      <NextBtn
                        type="button"
                        onClick={async () => {
                          if (
                            errors.category ||
                            values.category === "" ||
                            errors.title ||
                            values.title === "" ||
                            errors.name ||
                            values.name === "" ||
                            errors.birthday ||
                            values.birthday === "" ||
                            errors.breed ||
                            values.breed === ""
                          ) {
                            // setFieldTouched("category");
                            setFieldTouched("title");
                            setFieldTouched("name");
                            setFieldTouched("birthday");
                            setFieldTouched("breed");
                            return;
                          }
                          setModal(2);
                        }}
                      >
                        Next
                      </NextBtn>
                    </ModalFooter>
                  </>
                )}
                {modal === 2 && (
                  <>
                    <InputText>
                      The sex<Span>*</Span>:
                    </InputText>
                    <Box>
                      <RadioInput
                        onChange={handleChange}
                        type="radio"
                        id="male"
                        name="sex"
                        value="male"
                      />
                      <RadioLabel htmlFor="male">
                        <ImgSex src={male} alt="" /> Male
                      </RadioLabel>
                      <RadioInput
                        onChange={handleChange}
                        type="radio"
                        id="female"
                        name="sex"
                        value="female"
                      />
                      <RadioLabel htmlFor="female">
                        <ImgSex src={female} alt="" />
                        Female
                      </RadioLabel>
                    </Box>
                    <InputText htmlFor="location">
                      Location<Span>*</Span>:
                    </InputText>
                    <FormInput
                      onChange={handleChange}
                      type="text"
                      placeholder="Type name"
                      name="location"
                      value={values.location}
                      className={
                        errors.location && touched.location ? "error" : ""
                      }
                    />
                    {errors.location && touched.location ? (
                      <Error>{errors.location}</Error>
                    ) : null}

                    {values.category === "sell" ? (
                      <>
                        <InputText htmlFor="price">
                          Price<Span>*</Span>:
                        </InputText>
                        <FormInput
                          onChange={handleChange}
                          type="text"
                          placeholder="Type name"
                          name="price"
                          value={values.price}
                          className={
                            errors.price && touched.price ? "error" : ""
                          }
                        />
                      </>
                    ) : null}
                    {errors.price && touched.price ? (
                      <Error>{errors.price}</Error>
                    ) : null}
                    <InputText>Load the pet’s image:</InputText>
                    <FormInputImg
                      type="file"
                      id="addPhoto"
                      name="petsPhoto"
                      onChange={({ target: { files } }) => {
                        const file = files?.item(0);
                        console.log(file);
                        if (!file) return;
                        setPetPhoto(file);
                        previevFile(file);
                      }}
                    />
                    <AddPhoto htmlFor="addPhoto">
                      <AddIcon
                        src={previevPet ? previevPet : addIcon}
                        alt="sd"
                      />
                    </AddPhoto>
                    <InputText required>Comments</InputText>
                    <FormInputText
                      onChange={handleChange}
                      type="text"
                      placeholder="Type comments"
                      name="comments"
                      value={values.comments}
                      className={
                        errors.comments && touched.comments ? "error" : ""
                      }
                    />
                    {errors.comments && touched.comments ? (
                      <Error>{errors.comments}</Error>
                    ) : null}
                    <ModalFooter>
                      <CancelBtn type="button" onClick={() => setModal(1)}>
                        Back
                      </CancelBtn>
                      <NextBtn type="submit">Done</NextBtn>
                    </ModalFooter>
                  </>
                )}
              </FormWrapper>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default AddNoticesModal;
