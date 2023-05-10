import { createSlice } from "@reduxjs/toolkit";
import { fetchDotsExtraReducers } from "../../thunks/dotsThunk";

export const dotsSlice = createSlice({
    name:"dot",
    initialState:{
        dots:[]
    },
    reducers:{},
    extraReducers:(builder) => {
        fetchDotsExtraReducers(builder)
    }
})

export const selectDots = (state) => state.dot.dots

export const {} = dotsSlice.actions

export const dotsReducer = dotsSlice.reducer