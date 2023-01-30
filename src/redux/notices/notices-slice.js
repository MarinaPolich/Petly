import { createSlice } from "@reduxjs/toolkit";
import { getNoticesByCategory, addNotice } from "./notices-operations";

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
      .addCase(getNoticesByCategory.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(addNotice.pending, ({ notices }) => {
        notices.isLoading = true;
      })
      .addCase(getNoticesByCategory.fulfilled, ({ notices }) => {
        notices.isLoading = false;
        notices.error = "";
      })
      .addCase(addNotice.fulfilled, ({ notices }) => {
        notices.isLoading = false;
        notices.error = "";
      })
      .addCase(getNoticesByCategory.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      })
      .addCase(addNotice.rejected, ({ notices }, { payload }) => {
        notices.error = payload;
        notices.isLoading = false;
      });
  },
});

export const { filterNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;

//       .addCase(deleteTransactionThunk.pending, state => {
//         state.isLoading = true;
//       })

//       .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
//         state.transactions = calcBalance(sortFunc(state.transactions.filter(
//           transaction => transaction.id !== action.payload
//         )));
//         state.isLoading = false;
//         state.error = '';
//       })

//       .addCase(deleteTransactionThunk.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })

//       .addCase(editTransactionThunk.pending, state => {
//         state.isLoading = true;
//       })

//       .addCase(editTransactionThunk.fulfilled, (state, action) => {
//         state.transactions = calcBalance(sortFunc(state.transactions.map(item => {
//           if (item.id === action.payload.id) {
//             return action.payload;
//           }
//           return item;
//         })));
//         state.isLoading = false;
//         state.error = '';
//       })

//       .addCase(editTransactionThunk.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       });
//   },
// });
