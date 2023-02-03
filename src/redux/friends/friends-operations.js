import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFriends } from "services/friendsService";

export const friendsOperation = createAsyncThunk("friends/getAll", async (data, thunkApi) => {
try {
    return await getFriends();
    
} catch (error) {
    return thunkApi.rejectWithValue(error.message);
} 
})

