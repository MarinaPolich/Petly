import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavUserNotice } from "redux/notices/notices-operations";
import { filteredNoticesSelector } from "redux/notices/notices-selector";
import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";
import { BoxList, BoxButton, Button } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage] = useState(8);
  const dispatch = useDispatch();
  const filteredNotices = useSelector(filteredNoticesSelector);

  useEffect(() => {
    dispatch(getFavUserNotice());
  }, [dispatch]);

  useEffect(() => {
    setNotices(filteredNotices);
  }, [filteredNotices]);

  if (!filteredNotices) return;

  const lastNoticesIndex = currentPage * noticesPerPage;
  const firstNoticesIndex = lastNoticesIndex - noticesPerPage;
  const currentNotices = notices?.slice(firstNoticesIndex, lastNoticesIndex);

  const totalPage = Math.ceil(filteredNotices.length / 8);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      <BoxList>
        {currentNotices?.map((item) => (
          <NoticeCategoryItem item={item} key={item._id}></NoticeCategoryItem>
        ))}
      </BoxList>
      <BoxButton>
        {currentPage !== 1 && (
          <Button type="submit" onClick={prevPage}>
            Prev Page
          </Button>
        )}
        {totalPage !== currentPage && totalPage !== 0 && (
          <Button type="submit" onClick={nextPage}>
            Next Page
          </Button>
        )}
      </BoxButton>
    </>
  );
};

export default NoticesCategoriesList;
