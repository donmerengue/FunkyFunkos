import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsList: [],
};

export const getAllProducts = createAsyncThunk("PRODUCTS", () => {
  return axios
    .get("http://localhost:3001/api/funkos")
    .then((response) => response.data)
    .catch((error) => error);
});

export const getSearchResults = createAsyncThunk(
  "SEARCH-RESULTS",
  (searchString) => {
    return axios
      .get(`http://localhost:3001/api/funkos/${searchString}`)
      .then((response) => response.data)
      .catch((error) => error);
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.productsList = action.payload;
    });
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.productsList = action.payload;
    });
  },
});

export default ProductsSlice.reducer;
