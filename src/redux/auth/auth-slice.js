import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshToken,
  registration,
  patchData,
  currentUser,
  deletePet,
  addPets,
  addFavoriteNotice,
  deleteFavoriteNotice,
} from "./auth-operations";

const handlePending = (state) => {
  state.isLoggedIn = false;
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
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
        state.isLoading = false;
      })
      .addCase(registration.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = {};
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshToken.pending, (state) => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
        state.error = null;
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.user = {};
        state.accessToken = null;
        state.refreshToken = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.data.result;
        state.isLoading = false;
      })
      .addCase(patchData.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        const idx = state.user.pets.findIndex(
          (data) => data._id === payload.data
        );
        state.user.pets.splice(idx, 1);
      })
      .addCase(addPets.fulfilled, (state, { payload }) => {
        state.user.pets.push(payload.data.pet);
      })
      .addCase(addFavoriteNotice.pending, (state) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(addFavoriteNotice.rejected, (state, { payload }) => {
        state.isLoggedIn = true;
        state.error = payload;
      })
      .addCase(addFavoriteNotice.fulfilled, (state, { payload }) => {
        state.user.favorite.push(payload.data.noticeId);
        state.isLoggedIn = true;
      })
      .addCase(deleteFavoriteNotice.pending, (state) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(deleteFavoriteNotice.rejected, (state, { payload }) => {
        state.isLoggedIn = true;
        state.error = payload;
      })
      .addCase(deleteFavoriteNotice.fulfilled, (state, { payload }) => {
        state.user.favorite.splice(payload.data, 1);
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
