import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilterAction } from "redux/news/news-slice";
import { SearchInput, Form, StyledButton } from "./SearchForm.styled";
import SVG from "react-inlinesvg";
import { search } from "assets/icon";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const getDataFromInput = (e) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    e.preventDefault();
    dispatch(changeFilterAction(inputValue));
  };

  return (
    <Form onSubmit={changeFilter}>
      <SearchInput
        onChange={getDataFromInput}
        value={inputValue}
        placeholder="Search"
        type="text"
      />
      <StyledButton type="submit"><SVG src={search} width={25} height={25} title="Search" /></StyledButton>
    </Form>
  );
}
