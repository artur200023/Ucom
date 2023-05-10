import { createSlice } from "@reduxjs/toolkit";
import { fetchUnityExtraReducer } from "../../thunks/unityThunk";


export const unitySlice = createSlice({
    name:'unity',
    initialState:{
        unityBlock:[],
    },
    reducers:{},
    extraReducers:(builder) => {
        fetchUnityExtraReducer(builder)
    }
})

export const selectUnity = (state) => state.unity.unityBlock

export const {} = unitySlice.actions

export const unityReducer = unitySlice.reducer