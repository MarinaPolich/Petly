import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilterAction } from "redux/news/news-slice";

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
    <form onSubmit={changeFilter}>
      <input
        onChange={getDataFromInput}
        value={inputValue}
        placeholder="Search"
        type="text"
      />
      <button type="submit">Find</button>
    </form>
  );
}
