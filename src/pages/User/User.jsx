// import { useEffect, useState } from "react";
import axios from "axios";
import UserData from "components/UserData/UserData";
import {
  UserPageBox,
  UserInfoBox,
  UserPetsBox,
  UserHeader,
  AddBtnLabel,
  AddBtn,
} from "./User.styled";
import PetsData from "components/PetsData/PetsData";

axios.defaults.baseURL = "https://petly-back.onrender.com/api/";

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
  return (
    <UserPageBox>
      <UserInfoBox>
        <UserHeader>My information:</UserHeader>
        <UserData user={userData} />
      </UserInfoBox>
      <UserPetsBox>
        <UserHeader>My pets:</UserHeader>
        <PetsData user={userData} />
        <AddBtnLabel>
          <UserHeader>Add pet</UserHeader>
          <AddBtn type="button">+</AddBtn>
        </AddBtnLabel>
      </UserPetsBox>
    </UserPageBox>
  );
};

export default User;
