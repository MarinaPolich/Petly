import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.headers.common.Authorization = `Bearer `;
// axios.defaults.baseURL = "https://petly-back.onrender.com/api";

export const getNoticesByCategories = createAsyncThunk(
  "notices/fetchAll",
  async (data, thunkAPI) => {
    const params = Object.entries(data)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    try {
      const response = await axios.get(`/notices/?${params}`);
      return response.data.data.notices;
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
  async (token, thunkAPI) => {
    try {
      const response = await axios.get("/notices/user/own", token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavUserNotice = createAsyncThunk(
  "notices/getFavUserNotice",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get("/notices/user/favorite", token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteNotice = createAsyncThunk(
  "notices/favoriteNotice",
  async (data, thunkAPI) => {
    try {
      console.log(data._id);
      const response = await axios.patch(
        `/notices/user/${data._id}/favorites`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteNotice = createAsyncThunk(
  "notices/deleteFavoriteNotice",
  async (data, token, thunkAPI) => {
    try {
      console.log(data._id);
      const response = await axios.delete(
        `/notices/user/${data._id}/favorites`,
        token
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  "notices/deleteNotices",
  async (token, _id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/${_id}`, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
