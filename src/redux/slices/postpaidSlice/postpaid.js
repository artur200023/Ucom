import { createSlice } from "@reduxjs/toolkit";
import { fetchPostPaidExtraReducer } from "../../thunks/postPaidThunk";

export const postPaidSlice = createSlice({
    name:'postPaid',
    initialState:{
        postPaidBlocks:[],
    },
    reducers:{},
    extraReducers:(builder) => {
        fetchPostPaidExtraReducer(builder)
    }
})


export const selectPostPaid = (state) => state.postPaid.postPaidBlocks

export const {} = postPaidSlice.actions

export const postPaidReducer = postPaidSlice.reducer    