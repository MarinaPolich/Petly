import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petly-back.onrender.com/api";

export const getNotices = createAsyncThunk(
  "notices/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notices/sell");
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

export const favoriteNotice = createAsyncThunk(
  "notices/favoriteNotice",
  async (token, _id, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/notices/user/${_id}/favorites`,
        token
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteNotice = createAsyncThunk(
  "notices/deleteFavoriteNotice",
  async (token, _id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/notices/user/${_id}/favorites`,
        token
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotices = createAsyncThunk(
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
