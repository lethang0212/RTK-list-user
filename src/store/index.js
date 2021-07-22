import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { setUser } from "../applications/store/slice";

export const store = configureStore({
  reducer: setUser,
});
