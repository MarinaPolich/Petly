import SVG from "react-inlinesvg";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { logOut, patchData } from "redux/auth/auth-operations";
import { camera, door } from "assets/icon";

import UserDataItem from "components/UserDataItem/UserDataItem";

import {
  UserInfo,
  UserInfoPhotoBox,
  UserPhoto,
  LabelInputPhoto,
  LogOutBtn,
} from "./UserData.styled";

const UserData = ({ user }) => {
  const [newPhoto, setNewPhoto] = useState(null);
  const dispatch = useDispatch();

  const onChange = (data) => {
    console.log(data);
    setNewPhoto(data);
    console.log(newPhoto);
  };

  useEffect(() => {
    if (newPhoto) {
      dispatch(patchData(newPhoto));
      console.log(newPhoto);
    }
  }, [newPhoto, dispatch]);

  return (
    <UserInfo>
      <UserInfoPhotoBox>
        <UserPhoto src={user.avatarURL} alt={user.name}></UserPhoto>
        <LabelInputPhoto>
          <SVG src={camera} width={20} height={20} />
          Edit photo
          <input
            hidden={true}
            type="file"
            onChange={({ target: { files } }) => {
              const file = files?.item(0);
              console.log(file);
              if (!file) return;
              const formData = new FormData();
              formData.append("image", file);
              onChange(formData);
            }}
          ></input>
        </LabelInputPhoto>
      </UserInfoPhotoBox>
      <UserDataItem user={user} />

      <LogOutBtn
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        <SVG src={door} width={20} height={20} />
        Log Out
      </LogOutBtn>
    </UserInfo>
  );
};
export default UserData;
