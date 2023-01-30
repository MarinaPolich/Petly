import { createSlice } from "@reduxjs/toolkit";
import { newsOperation } from "./news-operations";


const newsSlice = createSlice({
    name: "news",
    initialState: {
        filter: "",
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => { 
        builder.addCase(newsOperation.pending, (state, action)=> {
         state.isLoading = true;
         state.error = null;
        }).addCase(newsOperation.fulfilled, (state, action)=> {
            state.items = action.payload;
            state.isLoading = false;
        }).addCase(newsOperation.rejected, (state, action)=> {
state.error = action.payload;
        })

    },
    reducers: {
        changeFilterAction: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const newsReducer = newsSlice.reducer;
export const {changeFilterAction} = newsSlice.actions;