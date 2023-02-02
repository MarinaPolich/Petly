// import { useEffect, useState } from "react";
// import axios from "axios";
import React, { useState, useEffect } from "react";
import SVG from "react-inlinesvg";
import { addBtnIcon } from "assets/icon";
import UserData from "components/UserData/UserData";
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
} from "./User.styled";
import PetsData from "components/PetsData/PetsData";
import Modal from "../../components/Modal/Modal";
import addIcon from "../../assets/icon/Icon_add_photo.svg";

// axios.defaults.baseURL = "https://petly-back.onrender.com/api/";

const User = () => {
  // const [user, setUser] = useState({});

  // const getUser = async () => {
  //   // const userData = await axios.get("user/userinfo");
  //   // setUser(userData);
  // };

  // useEffect(() => {
  //   getUser();
  //   // eslint-disable-next-line
  // }, [user]);

  const userData = {
    _id: "63ab17b6cdc8b742046a5b5e",
    email: "alex@gmail.com",
    name: "Alex",
    city: "Kyiv, Obolon",
    phone: "0911111111",
    avatarUrl: "//www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7",
    myPets: [
      {
        _id: "63ab17e4cdc8b742046a5b62",
        name: "Cat",
        birthday: null,
        breed: "Good",
        comments: null,
        avatarURL:
          "https://res.cloudinary.com/dhfk2xkow/image/upload/v1672061970/avatars/pqys0k4rpbrlkrliywpw.jpg",
        owner: "63ab17b6cdc8b742046a5b5e",
        cloudId: "avatars/pqys0k4rpbrlkrliywpw",
        __v: 0,
      },
    ],
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlYzRmOWI3N2MzZmUzMDJmZGNkNiIsImlhdCI6MTY3Mjg2NzE2MiwiZXhwIjoxNjcyODY4MDYyfQ.YavIaSIWMaBTeeaUBoSZi7syF7-HV3gGiCmkxTp_4f0",
    refreshToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlYzRmOWI3N2MzZmUzMDJmZGNkNiIsImlhdCI6MTY3Mjg2NzE2MiwiZXhwIjoxNjczNDcxOTYyfQ.argwCLrMWM_txjGk5BdJkDd4aVJ3CENjRehU6FIZsfo",
    favorites: ["63b5b82ffe500173aca6defb"],
    own: ["63b5b81bfe500173aca6def7"],
    createdAt: "2022-12-27T16:05:10.175Z",
    updatedAt: "2022-12-27T16:05:56.198Z",
  };
  const [modalActive, setModalActive] = useState(false);
  const [modal, setModal] = useState(1);

  const [formData, updateFormData] = useState([]);
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
      <div>
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
      </div>
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
              <InputTextImgModa2>
                Add photo and some comments{" "}
              </InputTextImgModa2>
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
