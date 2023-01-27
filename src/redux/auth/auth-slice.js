import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {},
});

export const authReducer = authSlice.reducer;
