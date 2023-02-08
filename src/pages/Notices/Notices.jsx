import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { currentUser } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selector";
import { getIsLoading } from "redux/notices/notices-selector";
import {
  NoticesCategoriesNav,
  NoticesSearch,
  AddNoticeButton,
} from "../../components/Notices/index";
import { Box, NavBox } from "./Notices.styled";

const Notices = () => {
  const isLoading = useSelector(getIsLoading);
  const userData = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData.hasOwnProperty("name")) {
      dispatch(currentUser());
    }
  }, [dispatch, userData]);

  return (
    <Box>
      {isLoading && <Loader />}
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
