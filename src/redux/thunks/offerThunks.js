import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOffer = createAsyncThunk("fetchOffer", async () => {
  const url = "http://localhost:3030/offerInfo";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const fetchOfferPending = (state, { payload }) => {
  state.offerBlock = [];
};

const fetchOfferFulfilled = (state, { payload }) => {
  state.offerBlock = payload;
};

const fetchOfferRejectd = (state, { payload }) => {
  state.offerBlock = [];
};

export const fetchOfferExtraReducer = (builder) => {
  builder
    .addCase(fetchOffer.pending, fetchOfferPending)
    .addCase(fetchOffer.fulfilled, fetchOfferFulfilled)
    .addCase(fetchOffer.rejected, fetchOfferRejectd);
};
