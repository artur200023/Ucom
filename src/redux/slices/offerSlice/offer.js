import { createSlice } from "@reduxjs/toolkit";
import { fetchOfferExtraReducer } from "../../thunks/offerThunks";

export const offerSlice = createSlice({
  name: "offer",
  initialState: {
    offerBlock: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    fetchOfferExtraReducer(builder);
  },
});

export const selectOffer = (state) => state.offer.offerBlock;

export const {} = offerSlice.actions;

export const offerReducer = offerSlice.reducer;
