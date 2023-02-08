import { createSlice } from "@reduxjs/toolkit";
import {
  getNoticesByCategories,
  addNotice,
  userNotice,
  getFavUserNotice,
  addFavoriteNotice,
  deleteFavoriteNotice,
  deleteNotice,
} from "./notices-operations";

const initialState = {
  category: "",
  totalCount: 0,
  filter: "",
  items: [],
  error: null,
  isLoading: false,
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
      .addCase(getNoticesByCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getNoticesByCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.notices;
        state.category = payload.category;
        state.totalCount = payload.totalCount;
      })
      .addCase(getNoticesByCategories.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const newItem = {
          ...payload,
        };
        const index = state.items.findIndex(({ _id }) => _id === newItem._id);
        if (index !== -1) {
          state.items[index] = newItem;
          return;
        }
        state.items.push(newItem);
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(userNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.data;
        state.category = "own";
        state.totalCount = payload.counter;
      })
      .addCase(userNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getFavUserNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavUserNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.favorite;
        state.category = "favorite";
        state.totalCount = payload.counter;
      })
      .addCase(getFavUserNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addFavoriteNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavoriteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addFavoriteNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteFavoriteNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFavoriteNotice.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteFavoriteNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item._id !== payload._id);
      })
      .addCase(deleteNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { filterNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
