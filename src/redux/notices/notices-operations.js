import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.headers.common.Authorization = `Bearer `;

axios.defaults.baseURL = "https://petly-back.onrender.com/api";

export const getNoticesByCategory = createAsyncThunk(
  "notices/fetchAll",
  async (data, thunkAPI) => {
    try {
      const categoryName = data.map(({ category }) => category);
      const response = await axios.post(`/notices/${categoryName}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  "notices/addNotice",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/notices/addnotice", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
