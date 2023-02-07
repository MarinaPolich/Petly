import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userNotice } from "redux/notices/notices-operations";
import {
  //filteredNoticesSelector,
  getCategory,
  getTotalCount,
  noticesSelector,
} from "redux/notices/notices-selector";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList, BoxButton, Button } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  //const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage] = useState(8);
  const innerCategory = "own";
  const dispatch = useDispatch();
  const notices = useSelector(noticesSelector);
  const totalCount = useSelector(getTotalCount);
  const noticeCategory = useSelector(getCategory);

  useEffect(() => {
    dispatch(userNotice({ page: currentPage, limit: noticesPerPage }));
  }, [dispatch, currentPage, noticesPerPage]);

  // useEffect(() => {
  //   setNotices(filteredNotices);
  // }, [filteredNotices]);

  if (!notices || innerCategory !== noticeCategory) {
    return;
  }

  // const lastNoticesIndex = currentPage * noticesPerPage;
  // const firstNoticesIndex = lastNoticesIndex - noticesPerPage;
  // const currentNotices = notices?.slice(firstNoticesIndex, lastNoticesIndex);

  const totalPage = Math.ceil(totalCount / noticesPerPage);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <BoxList>
        {notices?.map((item) => (
          <NoticeCategoryItem item={item} key={item._id}></NoticeCategoryItem>
        ))}
      </BoxList>
      <BoxButton>
        {currentPage !== 1 && (
          <Button type="submit" onClick={prevPage}>
            Prev Page
          </Button>
        )}
        {totalPage !== currentPage && totalPage && (
          <Button type="submit" onClick={nextPage}>
            Next Page
          </Button>
        )}
      </BoxButton>
    </>
  );
};

export default NoticesCategoriesList;
