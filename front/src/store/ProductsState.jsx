import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  productsList: [],
  error: "",
};

export const getAllProducts = createAsyncThunk("PRODUCTS", () => {
  return axios
    .get("http://localhost:3001/api/funkos")
    .then((response) => response.data)
    .catch((error) => error);
});

export const getSingleProduct = createAsyncThunk(
  "SINGLE-PRODUCT",
  (productName) => {
    return axios
      .get(`http://localhost:3001/api/funkos/${productName}`)
      .then((response) => response.data)
      .catch((error) => error);
  }
);

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
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message;
    });
    builder.addCase(getSearchResults.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    });
    builder.addCase(getSearchResults.rejected, (state, action) => {
      state.loading=false
      state.error = action.error.message;
    });
  },
});

export default ProductsSlice.reducer;
