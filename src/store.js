import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dotsReducer } from "./redux/slices/dotsSlice/dotsSlice";
import { unityReducer } from "./redux/slices/unitySlice/unitySlice";
import { postPaidReducer } from "./redux/slices/postpaidSlice/postpaid";
import { offerReducer } from "./redux/slices/offerSlice/offer";
import { newsReducer } from "./redux/slices/newsSlice/newsSlice";

const mainReducer = combineReducers({
  dot: dotsReducer,
  unity: unityReducer,
  postPaid: postPaidReducer,
  offer: offerReducer,
  news:newsReducer
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
