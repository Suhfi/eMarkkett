import { configureStore } from "@reduxjs/toolkit";
import markkettReducer from "./markkettSlice";

export const store = configureStore({
  reducer: {
    markkett: markkettReducer,
  },
});
