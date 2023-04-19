import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import reviewsReducer from "../features/reviews/reviewsSlice";
import businessReducer from "../features/business/businessSlice";

//create store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    reviews: reviewsReducer,
    business: businessReducer,
  },
});
