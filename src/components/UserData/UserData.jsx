import SVG from "react-inlinesvg";
import { camera } from "assets/icon";

import UserDataItem from "components/UserDataItem/UserDataItem";

import {
  UserInfo,
  UserInfoPhotoBox,
  UserPhoto,
  LabelInputPhoto,
} from "./UserData.styled";

const onChange = (data) => {
  console.log(data);
};

const UserData = ({ user }) => {
  return (
    <UserInfo>
      <UserInfoPhotoBox>
        <UserPhoto
          src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
          alt="PhotoUser"
        ></UserPhoto>
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
    </UserInfo>
  );
};
export default UserData;
