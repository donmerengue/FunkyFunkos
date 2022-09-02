import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
  reviews: [],
};

export const getSingleProduct = createAsyncThunk(
  "SINGLE-PRODUCT",
  (productName) => {
    return axios
      .get(`http://localhost:3001/api/funkos/${productName}`)
      .then((response) => response.data[0])
      .catch((error) => error);
  }
);

const SingleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default SingleProductSlice.reducer;
