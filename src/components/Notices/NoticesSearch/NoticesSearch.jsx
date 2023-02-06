import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search, clear } from "assets/icon";
import { filterNotices } from "redux/notices/notices-slice";
import { Box, Title, Form, Input, Button, Svg } from "./NoticesSearch.styled";
import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";

const NoticesSearch = () => {
  const [filter, setFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  searchParams.get("query");
  const isDesktopOrTablet = useDesktopOrTablet();

  const onChange = (event) => {
    setFilter(event.target.value);
    setSearchParams({ query: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(filterNotices(filter));
    setFilter("");
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
          value={filter}
          onChange={onChange}
        />
        <Button type="submit">
          <Mobile>
            {filter.length < 1 ? (
              <Svg src={search} width="20" height="20" title="search" />
            ) : (
              <Svg src={clear} width="20" height="20" title="clear" />
            )}
          </Mobile>
          {isDesktopOrTablet &&
            (filter.length < 1 ? (
              <Svg src={search} width="24" height="24" title="search" />
            ) : (
              <Svg src={clear} width="24" height="24" title="clear" />
            ))}
        </Button>
      </Form>
    </Box>
  );
};

export default NoticesSearch;
