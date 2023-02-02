import SVG from "react-inlinesvg";
import { camera, door } from "assets/icon";

import UserDataItem from "components/UserDataItem/UserDataItem";

import {
  UserInfo,
  UserInfoPhotoBox,
  UserPhoto,
  LabelInputPhoto,
  LogOutBtn,
} from "./UserData.styled";

const onChange = (data) => {
  console.log(data);
};

const UserData = ({ user }) => {
  console.log(user);
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

      <LogOutBtn type="button">
        <SVG src={door} width={20} height={20} />
        Log Out
      </LogOutBtn>
    </UserInfo>
  );
};
export default UserData;
