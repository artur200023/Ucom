import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDots = createAsyncThunk('fetchDots', async () => {
    const url = "http://localhost:3030/dots"
    try { 
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        throw new Error(error.message)
    }
})

const fetchDotsPending = (state, {payload}) => {
    state.dots = []
}

const fetchDotsersFulfilled = (state, {payload}) => {
    state.dots = payload
}

const fetchDotsRejected = (stete, {payload}) => {
    stete.dots = []
}

export const fetchDotsExtraReducers = (builder) => {
    builder
    .addCase(fetchDots.pending, fetchDotsPending)
    .addCase(fetchDots.fulfilled,fetchDotsersFulfilled)
    .addCase(fetchDots.rejected,fetchDotsRejected)

}