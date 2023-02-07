import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNoticesByCategories = createAsyncThunk(
  "notices/fetchAll",
  async (data, thunkAPI) => {
    const params = Object.entries(data)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    try {
      const response = await axios.get(`/notices/?${params}`);
      return { ...response.data.data, category: data.category };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  "notices/addNotice",
  async (notice, thunkAPI) => {
    try {
      const response = await axios.post("/notices/addnotice", notice);
      return response.data.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userNotice = createAsyncThunk(
  "notices/userNotice",
  async (data, thunkAPI) => {
    try {
      const params = Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      const response = await axios.get(`/notices/user/own/?${params}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavUserNotice = createAsyncThunk(
  "notices/getFavUserNotice",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/favorite`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  "notices/deleteNotices",
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
