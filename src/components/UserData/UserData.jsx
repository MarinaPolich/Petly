import UserDataItem from "components/UserDataItem/UserDataItem";
import {
  UserInfo,
  UserInfoPhotoBox,
  UserPhoto,
  InputPhoto,
  LabelInputPhoto,
} from "./UserData.styled";
const UserData = ({ user }) => {
  return (
    <UserInfo>
      <UserInfoPhotoBox>
        <UserPhoto
          src="https://www.gravatar.com/avatar/0312d0d39585741666c19c217ed769f7"
          alt="PhotoUser"
        ></UserPhoto>
        <LabelInputPhoto>
          Edit photo<InputPhoto type="file"></InputPhoto>
        </LabelInputPhoto>
      </UserInfoPhotoBox>
      <UserDataItem user={user} />
    </UserInfo>
  );
};
export default UserData;
