import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { currentUser } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selector";
import {
  NoticesCategoriesNav,
  NoticesSearch,
  AddNoticeButton,
} from "../../components/Notices/index";
import { Box, NavBox } from "./Notices.styled";

const Notices = () => {
  const userData = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.hasOwnProperty("name")) {
      dispatch(currentUser());
    }
  }, [dispatch, userData]);

  return (
    <Box>
      <NoticesSearch></NoticesSearch>
      <NavBox>
        <NoticesCategoriesNav></NoticesCategoriesNav>
        <AddNoticeButton></AddNoticeButton>
      </NavBox>
      <Outlet />
    </Box>
  );
};

export default Notices;
