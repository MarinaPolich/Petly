import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNoticesByCategories } from "redux/notices/notices-operations";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesByCategories());
  }, [dispatch]);

  return (
    <BoxList>
      <NoticeCategoryItem></NoticeCategoryItem>
    </BoxList>
  );
};

export default NoticesCategoriesList;
