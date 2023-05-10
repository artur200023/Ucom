import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostPaid = createAsyncThunk("fetchPostPaid", async () => {
  const url = "http://localhost:3030/postPaidCard";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const fetchPostPaidPending = (state, { payload }) => {
  state.postPaidBlocks = [];
};

const fetchPostPaidFulfilled = (state, { payload }) => {
  state.postPaidBlocks = payload;
};

const fetchPostPaidRejected = (state, { payload }) => {
  state.postPaidBlocks = [];
};

export const fetchPostPaidExtraReducer = (builder) => {
  builder
    .addCase(fetchPostPaid.pending, fetchPostPaidPending)
    .addCase(fetchPostPaid.fulfilled, fetchPostPaidFulfilled)
    .addCase(fetchPostPaid.rejected, fetchPostPaidRejected);
};
