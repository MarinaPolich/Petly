import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

import {
  NoticesCategoriesNav,
  NoticesSearch,
  AddNoticeButton,
} from "../../components/Notices/index";
import { Box, NavBox } from "./Notices.styled";
import { getIsLoading } from "redux/notices/notices-selector";
import { useSelector } from "react-redux";

const Notices = () => {
  const isLoading = useSelector(getIsLoading);
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
