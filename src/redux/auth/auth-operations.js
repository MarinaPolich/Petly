import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://pet-ly.onrender.com/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registration = createAsyncThunk(
  "auth/registration",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.failure("Validation error", { closeButton: true });
      }
      if (error.response.status === 409) {
        Notify.failure("User with such email already exists", {
          closeButton: true,
        });
        return rejectWithValue({
          email: "User with such email already exists",
        });
      }
      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.failure("Validation error");
      }
      if (error.response.status === 401) {
        return Notify.failure("Email or password invalid");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const refreshToken = state.auth.refreshToken;
  try {
    await axios.post("/auth/logout", { refreshToken });
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      const res = await axios.post("/auth/refresh-tokens", {
        refreshToken: persistedToken,
      });
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "/user/current",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/user/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchData = createAsyncThunk(
  "/user/update",
  async (data, thunkAPI) => {
    try {
      const res = await axios.patch("/user/update", data);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        Notify.failure(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  "/user/pets/delete/",
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`/user/pets/delete/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
