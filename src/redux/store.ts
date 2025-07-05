import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";

const rootReducer = combineReducers({
  data: dataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NEXT_PUBLIC_TYPE! !== "prod",
});
