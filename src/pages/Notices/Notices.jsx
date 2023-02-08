import { Outlet } from "react-router-dom";
import {
  NoticesCategoriesNav,
  NoticesSearch,
  AddNoticeButton,
} from "../../components/Notices/index";
import { Box, NavBox } from "./Notices.styled";

const Notices = () => {
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
