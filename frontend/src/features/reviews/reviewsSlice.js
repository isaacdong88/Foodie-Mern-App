import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  reviews: [],
  review: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createReview = createAsyncThunk(
  "reviews/create",
  async (reviewData, thunkAPI) => {
    try {
      const API_URL = "/reviews/";
      const token = thunkAPI.getState().auth.user.token;
      const createReview = async (reviewData, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(API_URL, reviewData, config);

        return response.data;
      };
      return await createReview(reviewData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get user reviews
export const getReviews = createAsyncThunk(
  "reviews/allReviews",
  async (_, thunkAPI) => {
    try {
      const API_URL = "/reviews/";
      const token = thunkAPI.getState().auth.user.token;
      const getReview = async (token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(API_URL, config);

        return response.data;
      };
      return await getReview(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getReview = createAsyncThunk(
  "review/fetch",
  async (id, thunkAPI) => {
    try {
      const API_URL = "/reviews/review/";
      const token = thunkAPI.getState().auth.user.token;
      const getReview = async (id, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(API_URL + id, config);

        return response.data;
      };
      return await getReview(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//delete user reviews
export const deleteReview = createAsyncThunk(
  "reviews/delete",
  async (id, thunkAPI) => {
    try {
      const API_URL = "/reviews/";
      const token = thunkAPI.getState().auth.user.token;
      const deleteReview = async (id, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.delete(API_URL + id, config);

        return response.data;
      };
      return await deleteReview(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//edit user reviews
export const editReview = createAsyncThunk(
  "reviews/edit",
  async (body, thunkAPI) => {
    try {
      const API_URL = "/reviews/";
      const token = thunkAPI.getState().auth.user.token;

      const editReview = async (body, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.put(API_URL + body._id, body, config);

        return response.data;
      };

      return await editReview(body, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews.push(action.payload);
      })
      .addCase(createReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.review = action.payload;
      })
      .addCase(getReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = state.reviews.filter((review) => {
          return review._id !== action.payload.id;
        });
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editReview.fulfilled, (state, action) => {
        let index = state.reviews.findIndex(
          (review) => review._id === action.payload._id
        );
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews[index] = action.payload;
        state.review = action.payload;
      })
      .addCase(editReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = reviewSlice.actions;
export default reviewSlice.reducer;
