import NewsItem from "components/NewsItem/NewsItem";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsOperation } from "redux/news/news-operations";
import { selectFilteredNews } from "redux/news/news-selector";

const News = () => {
  const dispatch = useDispatch();

  const filteredNews = useSelector(selectFilteredNews);

  useEffect(() => {
    dispatch(newsOperation());
  }, [dispatch]);

  return (
    <>
      <SearchForm />
      <ul>
        {filteredNews.map((item) => (
          <NewsItem item={item} key={item._id} />
        ))}
      </ul>
      ;
    </>
  );
};

export default News;
