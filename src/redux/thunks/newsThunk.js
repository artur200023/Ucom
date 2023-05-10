import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("fetchNews", async () => {
  const url = "http://localhost:3030/aboutNews";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const fetchNewsPending = (state, { payload }) => {
  state.newsBlock = [];
};

const fetchNewsFulfilled = (state, { payload }) => {
  state.newsBlock = payload;
  console.log(payload);
};

const fetchNewsRejected = (state, { payload }) => {
  state.newsBlock = [];
};

export const fetchNewsExtraReducer = (builder) => {
  builder
    .addCase(fetchNews.pending, fetchNewsPending)
    .addCase(fetchNews.fulfilled, fetchNewsFulfilled)
    .addCase(fetchNews.rejected, fetchNewsRejected);
};
