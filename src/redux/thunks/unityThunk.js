import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUnity = createAsyncThunk("fetchUnity", async () => {
    const url = "http://localhost:3030/unityCards"
    try {
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        throw new Error(error.message)
    }
})


const fetchUnityPending = (state, {payload}) => {
    state.unityBlock = []
}

const fetchUnityFulfilled = (state, {payload}) => {
    state.unityBlock = payload
}

const fetchUnityRejected = (state, {payload}) => {
    state.unityBlock = []
}

export const fetchUnityExtraReducer = (builder) => {
    builder
    .addCase(fetchUnity.pending,fetchUnityPending)
    .addCase(fetchUnity.fulfilled,fetchUnityFulfilled)
    .addCase(fetchUnity.rejected,fetchUnityRejected)
}