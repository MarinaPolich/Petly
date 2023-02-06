import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { addBtnIcon } from "assets/icon";
import UserData from "components/UserData/UserData";
import { useDispatch, useSelector } from "react-redux";
import {
  UserPageBox,
  UserInfoBox,
  UserHeader,
  AddBtnLabel,
  AddBtn,
  HeadingBox,
  PetsBox,
} from "./User.styled";
import PetsData from "components/PetsData/PetsData";

import { getUser } from "redux/auth/auth-selector";
import { currentUser } from "redux/auth/auth-operations";
import AddPetModal from "components/addPetModal/AddPetModal";

const User = () => {
 const [isModalActive,setIsModalActive]= useState(false)
  
  const userData = useSelector(getUser);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!userData.hasOwnProperty("name")) {
      dispatch(currentUser());
    }
  }, [dispatch, userData]);

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
            <AddBtn onClick={() => setIsModalActive(true)} type="button">
              <SVG src={addBtnIcon} width={16} height={16} />
            </AddBtn>
          </AddBtnLabel>
        </HeadingBox>
        <PetsData user={userData} />
      </PetsBox>
      <AddPetModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </UserPageBox>
  );
};

export default User;
