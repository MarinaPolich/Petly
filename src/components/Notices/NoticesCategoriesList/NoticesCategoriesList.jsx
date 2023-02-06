import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getNoticesByCategories,
  // getFavUserNotice,
  // userNotice,
} from "redux/notices/notices-operations";
import { filteredNoticesSelector } from "redux/notices/notices-selector";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const filteredNotices = useSelector(filteredNoticesSelector);

  useEffect(() => {
    dispatch(
      getNoticesByCategories(
        category === "for-free" ? "in-good-hands" : { category }
      )
    );
    // dispatch(getFavUserNotice());
    // dispatch(userNotice());
  }, [dispatch, category]);

  return (
    <BoxList>
      {filteredNotices.map((item) => (
        <NoticeCategoryItem item={item} key={item._id}></NoticeCategoryItem>
      ))}
    </BoxList>
  );
};

export default NoticesCategoriesList;
