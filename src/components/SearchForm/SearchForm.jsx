import React, { useState } from "react";
import { SearchInput, Form, StyledButton } from "./SearchForm.styled";
import SVG from "react-inlinesvg";
import { search } from "assets/icon";

export default function SearchForm({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const getDataFromInput = (e) => {
    if (e.target.value === "") {
      onSearch("");
    }
    setInputValue(e.target.value);
  };

  const changeFilter = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <Form onSubmit={changeFilter}>
      <SearchInput
        onChange={getDataFromInput}
        value={inputValue}
        placeholder="Search"
        type="text"
      />
      <StyledButton type="submit">
        <SVG src={search} width={25} height={25} title="Search" />
      </StyledButton>
    </Form>
  );
}
