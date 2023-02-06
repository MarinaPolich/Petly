import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavUserNotice,
} from "redux/notices/notices-operations";
import { getUser } from "redux/auth/auth-selector";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log(user);

  useEffect(() => {
    dispatch(getFavUserNotice());
  }, [dispatch]);

  return (
    <BoxList>
      {user.favorite.map((item) => (
        <NoticeCategoryItem item={item} key={item._id}></NoticeCategoryItem>
      ))}
    </BoxList>
  );
};

export default NoticesCategoriesList;
