import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

//create store
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
