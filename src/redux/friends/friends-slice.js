import { createSlice } from "@reduxjs/toolkit";
import { friendsOperation } from "./friends-operations";


const friendsSlice = createSlice({
    name: "friends",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => { 
        builder.addCase(friendsOperation.pending, (state, action)=> {
         state.isLoading = true;
         state.error = null;
        }).addCase(friendsOperation.fulfilled, (state, action)=> {
            state.items = action.payload;
            state.isLoading = false;
        }).addCase(friendsOperation.rejected, (state, action)=> {
state.error = action.payload;
        })

    }
})

export const friendsReducer = friendsSlice.reducer;
