import { createSlice } from "@reduxjs/toolkit";
import {
  getNotices,
  addNotice,
  userNotice,
  getFavUserNotice,
  favoriteNotice,
  deleteFavoriteNotice,
  deleteNotices,
} from "./notices-operations";

const initialState = {
  notices: {
    error: null,
    isLoading: false,
    items: [],
  },
  filter: "",
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    filterNotices: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotices.pending, ({ notices }) => {
        notices.isLoading = true;
      })

      .addCase(getNotices.fulfilled, ({ notices }) => {
        notices.isLoading = false;
        notices.error = "";
      })
      .addCase(getNotices.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(addNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(addNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.items = payload;
      })
      .addCase(addNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(userNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(userNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.items = payload;
      })
      .addCase(userNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(getFavUserNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(getFavUserNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.items = payload;
      })
      .addCase(getFavUserNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(favoriteNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(favoriteNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.items = payload;
      })
      .addCase(favoriteNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(deleteFavoriteNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(deleteFavoriteNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.items = payload;
      })
      .addCase(deleteFavoriteNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(deleteNotices.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(deleteNotices.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.items = payload;
      })
      .addCase(deleteNotices.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      });
  },
});

export const { filterNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
