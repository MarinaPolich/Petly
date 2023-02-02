import axios from "axios";
import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { addBtnIcon } from "assets/icon";
import UserData from "components/UserData/UserData";
import { useSelector } from "react-redux";
import {
  UserPageBox,
  UserInfoBox,
  UserHeader,
  AddBtnLabel,
  AddBtn,
  FormWrapper,
  InputText,
  FormInput,
  HeadingBox,
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
  PetsBox,
} from "./User.styled";
import PetsData from "components/PetsData/PetsData";
import Modal from "../../components/Modal/Modal";
import addIcon from "../../assets/icon/Icon_add_photo.svg";
import { getUser } from "redux/auth/auth-selector";

axios.defaults.baseURL = "https://petly-back.onrender.com/api/";

const User = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modal, setModal] = useState(1);

  const [formData, updateFormData] = useState([]);

  const userData = useSelector(getUser);

  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setModalActive();
    setTimeout(() => {
      setModal(1);
    }, 500);
  };

  const closeModal = () => {
    setModalActive(false);
    setTimeout(() => {
      setModal(1);
    }, 500);
  };

  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalActive]);
  return (
    <UserPageBox>
      <UserInfoBox>
        <UserHeader>My information:</UserHeader>
        <UserData user={userData} />
      </UserInfoBox>
      <PetsBox>
        <HeadingBox>
          <UserHeader>My pets:</UserHeader>

          <AddBtnLabel>
            Add pet
            <AddBtn onClick={() => setModalActive(true)} type="button">
              <SVG src={addBtnIcon} width={16} height={16} />
            </AddBtn>
          </AddBtnLabel>
        </HeadingBox>
        <PetsData user={userData} />
      </PetsBox>
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
                name="dateOfBirth"
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
              <InputTextImgModa2>Add photo and some comments</InputTextImgModa2>
              <FormInputImg type="file" id="addPhoto" />
              <AddPhoto for="addPhoto">
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
    </UserPageBox>
  );
};

export default User;
