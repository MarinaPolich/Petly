import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshToken,
  registration,
  patchData,
  currentUser,
} from "./auth-operations";

const handlePending = (state) => {
  state.isLoggedIn = false;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, (state, { payload }) => {
        // state.user = payload.user;
        // state.accessToken = payload.accessToken;
        // state.refreshToken = payload.refreshToken;
        // state.isLoggedIn = true;
      })
      .addCase(registration.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = {};
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshToken.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.user = {};
        state.accessToken = null;
        state.refreshToken = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.result;
      })
      .addCase(patchData.fulfilled, (state, { payload }) => {
        state.user = payload;
      }),
});

export const authReducer = authSlice.reducer;
