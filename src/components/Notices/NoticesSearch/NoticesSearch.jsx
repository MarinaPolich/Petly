import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search, clear } from "assets/icon";
import { Box, Title, Form, Input, Button, Svg } from "./NoticesSearch.styled";
import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";
import { getNoticesByCategories } from "redux/notices/notices-operations";

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const isDesktopOrTablet = useDesktopOrTablet();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      getNoticesByCategories({
        category: category === "for-free" ? "in-good-hands" : category,
        q: query,
      })
    );

    setSearchParams("");
  };

  return (
    <Box>
      <Title>Find your favorite pet</Title>
      <Form onSubmit={onSubmit}>
        <Input
          id="filterNotices"
          type="text"
          name="filter"
          placeholder="Search"
          value={query}
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
        <Button type="submit">
          <Mobile>
            {query.length < 1 ? (
              <Svg src={search} width="20" height="20" />
            ) : (
              <Svg src={clear} width="20" height="20" />
            )}
          </Mobile>
          {isDesktopOrTablet &&
            (query.length < 1 ? (
              <Svg src={search} width="24" height="24" />
            ) : (
              <Svg src={clear} width="24" height="24" />
            ))}
        </Button>
      </Form>
    </Box>
  );
};

export default NoticesSearch;
