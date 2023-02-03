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
  filter: "",
  items: [],
  favorite: [],
  check: false,
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
      .addCase(getNoticesByCategories.pending, ({ notices }) => {
        notices.isLoading = true;
      })

      .addCase(getNoticesByCategories.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
      })
      .addCase(getNoticesByCategories.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(addNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(addNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.check = false;
        const newItem = {
          title: payload.title,
          name: payload.name,
          birthdate: payload.birthdate,
          breed: payload.breed,
          location: payload.location,
          comments: payload.comments,
          price: payload.price,
        };
        notices.items.filter((item) => {
          if (item._id !== payload._id) {
            notices.items.push(newItem);
          }
          return newItem;
        });
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
        notices.favorite = payload;
        notices.check = true;
      })
      .addCase(getFavUserNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(addFavoriteNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(addFavoriteNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.check = true;
        notices.items.filter((item) => {
          if (item._id !== payload._id) {
            notices.favorite.push(item);
          }
          return item;
        });
      })
      .addCase(addFavoriteNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(deleteFavoriteNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(deleteFavoriteNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        notices.check = false;
        return notices.favorite.filter((item) => {
          if (item._id === payload._id) {
            notices.favorite.unshift(item);
          }
          return item;
        });
      })
      .addCase(deleteFavoriteNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(deleteNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(deleteNotice.fulfilled, ({ notices }, { payload }) => {
        notices.isLoading = false;
        notices.error = "";
        return notices.items.filter((item) => item._id !== payload._id);
      })
      .addCase(deleteNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      });
  },
});

export const { filterNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
