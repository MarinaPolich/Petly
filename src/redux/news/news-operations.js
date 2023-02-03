import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "services/newsService";

export const newsOperation = createAsyncThunk(
  "news/getAll",
  async (_, thunkApi) => {
    try {
      return await getNews();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
