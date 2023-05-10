import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsExtraReducer } from "../../thunks/newsThunk";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsBlock: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    fetchNewsExtraReducer(builder);
  },
});

export const selectNews = (state) => state.news.newsBlock;

export const {} = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
