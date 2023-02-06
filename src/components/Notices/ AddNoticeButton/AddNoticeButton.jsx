import {
  // useEffect,
  useState,
} from "react";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import SVG from "react-inlinesvg";
import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";
import { getIsLoggedIn } from "redux/auth/auth-selector";
// import { addNotice } from "redux/notices/notices-operations";
import { addBtnIcon } from "assets/icon";
import { AddBtnLabel, AddBtn } from "pages/User/User.styled";
import { Button } from "./AddNoticeButton.styled";
import AddNoticesModal from "../AddNoticesModal/AddNoticesModal";

const AddNoticeButton = () => {
  const isDesktopOrTablet = useDesktopOrTablet();
  const [activeModal, setActiveModal] = useState(false);

  const isLogin = useSelector(getIsLoggedIn);

  const onClick = () => {
    if (!isLogin) {
      console.log("Login false");
      return;
    }
    setActiveModal(true);
  };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addNotice());
  // }, [dispatch]);

  return (
    <>
      <Mobile>
        <Button onClick={onClick}>
          <SVG src={addBtnIcon} width={32} height={32} />
          Add pet
        </Button>
      </Mobile>
      {isDesktopOrTablet && (
        <AddBtnLabel>
          Add pet
          <AddBtn onClick={onClick}>
            <SVG src={addBtnIcon} width={16} height={16} />
          </AddBtn>
        </AddBtnLabel>
      )}
      <AddNoticesModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </>
  );
};

export default AddNoticeButton;
