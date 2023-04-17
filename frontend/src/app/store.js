import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import reviewsReducer from "../features/reviews/reviewsSlice";

//create store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    reviews: reviewsReducer,
  },
});
