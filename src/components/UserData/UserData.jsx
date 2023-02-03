import SVG from "react-inlinesvg";

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
  const dispatch = useDispatch();

  const onChange = (data) => {
    dispatch(patchData(data));
  };

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

              if (!file) return;
              const formData = new FormData();
              formData.append("avatar", file);
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
