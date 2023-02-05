import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNoticesByCategories } from "redux/notices/notices-operations";
import { noticesSelector } from "redux/notices/notices-selector";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();

  const notices = useSelector(noticesSelector);

  useEffect(() => {
    dispatch(getNoticesByCategories());
  }, [dispatch]);

  return (
    <BoxList>
      {notices.map((item) => (
        <NoticeCategoryItem item={item} key={item._id}></NoticeCategoryItem>
      ))}
    </BoxList>
  );
};

export default NoticesCategoriesList;
