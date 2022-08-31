import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: null,
  rating: 0,
  review: [],
};

// TODO: incorporar ruta de login y tal vez asyncThunk
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.productData = action.payload;
    },
    addRating(state, action) {
      state.rating = action.payload.rating;
    },
    addReview(state, action) {
      if (!state.review) state.review = [action.payload.review];
      else state.review.push(action.payload.review);
    },
  },
});

export default productsSlice.reducer;
