import { Outlet } from "react-router-dom";
import {
  NoticesCategoriesList,
  NoticesCategoriesNav,
  NoticesSearch,
} from "../../components/Notices/index";
import { Box } from "./Notices.styled";

const Notices = () => {
  return (
    <Box>
      <NoticesSearch></NoticesSearch>
      <NoticesCategoriesNav></NoticesCategoriesNav>
      <NoticesCategoriesList></NoticesCategoriesList>
      <Outlet />
    </Box>
  );
};

export default Notices;
