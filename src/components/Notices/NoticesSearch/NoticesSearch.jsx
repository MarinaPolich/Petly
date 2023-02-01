import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { search, clear } from "assets/icon";
import { filterNotices } from "redux/notices/notices-slice";
import { filterSelector } from "redux/notices/notices-selector";
import {
  Box,
  Title,
  Form,
  Input,
  Button,
  ButtonClear,
  Svg,
} from "./NoticesSearch.styled";
import { Mobile } from "components/Container/Mobile";
import { useDesktopOrTablet } from "hooks/useTablet";

const NoticesSearch = () => {
  const isDesktopOrTablet = useDesktopOrTablet();
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState("");
  const filter = useSelector(filterSelector);

  const onChange = (event) => {
    dispatch(filterNotices(event.target.value));
  };
  // console.log({dispatch(filterNotices(""))});

  const handleClear = (event) => {
    event.preventDefault();
    // setFilter("");
  };

  return (
    <Box>
      <Title>Find your favorite pet</Title>
      <Form>
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
            <Svg src={search} width="20" height="20" title="search" />
          </Mobile>
          {isDesktopOrTablet && (
            <Svg src={search} width="24" height="24" title="search" />
          )}
        </Button>
        <ButtonClear type="submit" onClick={handleClear}>
          <Mobile>
            <Svg src={clear} width="20" height="20" title="clear" />
          </Mobile>
          {isDesktopOrTablet && (
            <Svg src={clear} width="24" height="24" title="clear" />
          )}
        </ButtonClear>
      </Form>
    </Box>
  );
};

export default NoticesSearch;
