import NewsItem from "components/NewsItem/NewsItem";
import SearchForm from "components/SearchForm/SearchForm";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsOperation } from "redux/news/news-operations";
import { selectFilteredNews } from "redux/news/news-selector";
import { NewsContainer, NewsTitle, StyledUl } from "./News.styled";

const News = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const filteredNews = useSelector(selectFilteredNews(filter));

  useEffect(() => {
    dispatch(newsOperation());
  }, [dispatch]);

  return (
    <NewsContainer>
      <NewsTitle>News</NewsTitle>

      <SearchForm onSearch={setFilter} />
      <StyledUl>
        {filteredNews.map((item) => (
          <NewsItem item={item} key={item._id} />
        ))}
      </StyledUl>
    </NewsContainer>
  );
};

export default News;
