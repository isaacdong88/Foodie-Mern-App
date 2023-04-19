import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get user from local storage

const initialState = {
  business: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get business
export const getBusiness = createAsyncThunk(
  "auth/fetch",
  async (id, thunkAPI) => {
    try {
      const API_URL = "/business/business/";
      const token = thunkAPI.getState().auth.user.token;
      const getBusiness = async (id, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(API_URL + id, config);

        return response.data;
      };
      return await getBusiness(id, token);
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

export const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBusiness.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBusiness.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.business = action.payload;
      })
      .addCase(getBusiness.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = businessSlice.actions;
export default businessSlice.reducer;
