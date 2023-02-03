import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilterAction } from "redux/news/news-slice";
import { SearchInput, Form, StyledButton } from "./SearchForm.styled";
import SVG from "react-inlinesvg";
import { search } from "assets/icon";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const getDataFromInput = (e) => {
    
    if(e.target.value === "") {
 dispatch(changeFilterAction(""))
    }
    setInputValue(e.target.value);
  };
 
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
