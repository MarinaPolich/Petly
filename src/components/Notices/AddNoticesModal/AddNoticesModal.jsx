import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";
import addIcon from "../../../assets/icon/Icon_add_photo.svg";
import male from "../../../assets/icon/Male.svg";
import female from "../../../assets/icon/Female.svg";

import {
  FormWrapper,
  InputText,
  FormInput,
  ModalFooter,
  CancelBtn,
  NextBtn,
  FormInputImg,
  InputTextImgModa2,
  InputTextModa2,
  FormInputText,
  AddPhoto,
  AddIcon,
  FormInputDate,
  ModalText,
  Span,
  Box,
  RadioInput,
  RadioLabel,
  ImgSex,
  CategoryInut,
  CategoryLabel,
  Box2,
} from "./AddNoticesModal.styled";
const AddNoticesModal = ({ activeModal, setActiveModal }) => {

  const [modalActive, setModalActive] = useState(activeModal);

  const [modal, setModal] = useState(1);
  const [formData, updateFormData] = useState([]);
  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   setActiveModal();
    setTimeout(() => {
      setModal(1);
    }, 500);
  };
  const closeModal = () => {

      setActiveModal(false)
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

  return (
    <>
      <Modal
        title={"Add pet"}
        active={modalActive}
        setActive={setModalActive}
        setModalClose={closeModal}
        modal={setModal}
      >
        <FormWrapper action="">
          {modal === 1 && (
            <>
              <ModalText>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur
              </ModalText>
              <Box2>
                <CategoryInut
                  onChange={handleChange}
                  type="radio"
                  id="Choice1"
                  name="category"
                  value="lost/found"
                />
                <CategoryLabel htmlFor="Choice1">lost/found</CategoryLabel>
                <CategoryInut
                  onChange={handleChange}
                  type="radio"
                  id="Choice2"
                  name="category"
                  value="in good hands"
                />
                <CategoryLabel htmlFor="Choice2">in good hands</CategoryLabel>
                <CategoryInut
                  onChange={handleChange}
                  type="radio"
                  id="Choice3"
                  name="category"
                  value="sell"
                />
                <CategoryLabel htmlFor="Choice3">sell</CategoryLabel>
              </Box2>
              <InputText>
                Tittle of ad<Span>*</Span>
              </InputText>
              <FormInput
                onChange={handleChange}
                type="text"
                required
                placeholder="Type name"
                name="title"
              />
              <InputText>Name pet</InputText>
              <FormInput
                onChange={handleChange}
                type="text"
                required
                placeholder="Type name pet"
                name="name"
              />
              <InputText>Date of birth</InputText>
              <FormInputDate
                onChange={handleChange}
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                required
                placeholder="Type date of birth"
                name="birthday"
              />
              <InputText>Breed</InputText>
              <FormInput
                onChange={handleChange}
                type="text"
                required
                placeholder="Type breed"
                name="breed"
              />
              <ModalFooter>
                <CancelBtn onClick={() => closeModal()}>Cancel</CancelBtn>
                <NextBtn onClick={() => setModal(2)}> Next </NextBtn>
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
                  value="Male"
                />
                <RadioLabel htmlFor="male">
                  <ImgSex src={male} alt="" /> Male
                </RadioLabel>
                <RadioInput
                  onChange={handleChange}
                  type="radio"
                  id="female"
                  name="sex"
                  value="Female"
                />
                <RadioLabel htmlFor="female">
                  <ImgSex src={female} alt="" />
                  Female
                </RadioLabel>
              </Box>
              <InputText>
                Location<Span>*</Span>:
              </InputText>
              <FormInput
                onChange={handleChange}
                type="text"
                required
                placeholder="Type name"
                name="location"
              />
              <InputText>
                Price<Span>*</Span>:
              </InputText>
              <FormInput
                onChange={handleChange}
                type="text"
                required
                placeholder="Type name"
                name="price"
              />
              <InputTextImgModa2>Load the pet’s image:</InputTextImgModa2>
              <FormInputImg type="file" id="addPhoto" />
              <AddPhoto htmlFor="addPhoto">
                <AddIcon src={addIcon} alt="sd" />
              </AddPhoto>
              <InputTextModa2 required>Comments</InputTextModa2>
              <FormInputText
                onChange={handleChange}
                type="text"
                placeholder="Type comments"
                name="comments"
              />
              <ModalFooter>
                <CancelBtn onClick={() => setModal(1)}>Back</CancelBtn>
                <NextBtn type="submit" onClick={handleSubmit}>
                  Done
                </NextBtn>
              </ModalFooter>
            </>
          )}
        </FormWrapper>
      </Modal>
    </>
  );
};

export default AddNoticesModal;
