import React, { useEffect, useState } from "react";

import {
  FormWrapper,
  InputText,
  FormInput,
  ModalFooter,
  CancelBtn,
  NextBtn,
  FormInputImg,
  InputTextImgModa2,
  FormInputText,
  AddPhoto,
  AddIcon,
  Error,
} from "./addPetModal.style";
import Modal from "../Modal/Modal";

import addIcon from "../../assets/icon/Icon_add_photo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addPets } from "redux/auth/auth-operations";
import { useRef } from "react";

const ModalSchema = Yup.object().shape({
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
});

const AddPetModal = ({ isModalActive, setIsModalActive }) => {
  const [modalActive, setModalActive] = useState(isModalActive);
  const [modal, setModal] = useState(1);
  const [customInput, setCustomInput] = useState(new Date());
  const [petPhoto, setPetPhoto] = useState(null);
  const [previevPet, setPrevievPet] = useState(null);
  const dispatch = useDispatch();
  const formikRef = useRef();

  const previevFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevievPet(reader.result);
    };
  };
  const onSubmit = (value, { resetForm }) => {
    const data = new FormData();
    data.append("name", value.name);
    data.append("dateOfBirth", value.dateOfBirth);
    data.append("breed", value.breed);
    data.append("comments", value.comments);
    if (petPhoto) data.append("petsPhoto", petPhoto);

    dispatch(addPets(data));

    setPetPhoto(null);
    setPrevievPet(null);
    setIsModalActive(false);
    resetForm();
    setTimeout(() => {
      setModal(1);
    }, 500);
  };

  const closeModal = () => {
    setIsModalActive(false);
    setTimeout(() => {
      setModal(1);
    }, 500);
  };

  useEffect(() => {
    setModalActive(isModalActive);
  }, [isModalActive]);

  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      formikRef.current?.resetForm();
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
    <Modal
      title={"Add pet"}
      active={modalActive}
      setActive={setModalActive}
      setModalClose={closeModal}
      modal={setModal}
    >
      <Formik
        innerRef={formikRef}
        initialValues={{
          name: "",
          dateOfBirth: customInput,
          breed: "",
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
          resetForm,
        }) => {
          return (
            <FormWrapper onSubmit={handleSubmit}>
              {modal === 1 && (
                <>
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
                  <InputText htmlFor="dateOfBirth">Date of birth</InputText>
                  <DatePicker
                    selected={customInput}
                    type="date"
                    name="dateOfBirth"
                    onChange={(date) => {
                      setCustomInput(date);
                      return setFieldValue("dateOfBirth", date);
                    }}
                    dateFormat="dd.MM.yyyy"
                    customInput={<CustomInput />}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                  />
                  {errors.dateOfBirth && touched.dateOfBirth ? (
                    <Error>{errors.dateOfBirth}</Error>
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
                    <CancelBtn type="button" onClick={() => closeModal()}>
                      Cancel
                    </CancelBtn>
                    <NextBtn
                      type="button"
                      onClick={async () => {
                        if (
                          errors.name ||
                          values.name === "" ||
                          errors.breed ||
                          values.breed === ""
                        ) {
                          setFieldTouched("name");
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
                  <InputTextImgModa2 htmlFor="addPhoto">
                    Add photo and some comments
                  </InputTextImgModa2>
                  <FormInputImg
                    type="file"
                    id="petsPhoto"
                    name="petsPhoto"
                    onChange={({ target: { files } }) => {
                      const file = files?.item(0);
                      console.log(file);
                      if (!file) return;
                      previevFile(file);
                      setPetPhoto(file);
                    }}
                  />
                  <AddPhoto htmlFor="petsPhoto">
                    <AddIcon
                      src={previevPet ? previevPet : addIcon}
                      alt="my pet"
                    />
                  </AddPhoto>
                  <InputText htmlFor="comments">Comments</InputText>
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
  );
};

export default AddPetModal;
