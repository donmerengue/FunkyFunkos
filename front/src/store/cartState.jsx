import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cartData: [],
  counter: 0,
  showCart: false,
  error: "",
};

export const addItemToCart = createAsyncThunk(
  "ADD-ITEM-TO-CART",
  (productName) => {
    console.log("productName", productName);

    return axios
      .get(`http://localhost:3001/api/funkos/${productName}`)
      .then((response) => {
        console.log("response", response);
        console.log("el resultado del axios: ", response.data[0]);
        return response.data[0];
      })
      .catch((error) => error);
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) state.counter--;
    },
  },
  //   removeItem(state, action) {
  //     // FIXME: Pensar como se actualizaria bien el numero de productos
  //     state.counter = state.counter;
  //     state.cartData.filter(
  //       (cartItem) => cartItem.id === action.payload.id
  //     );
  //   },
  //   showCounter(state) {
  //     return state.counter;
  //   },
  //   toggleCart(state, action) {
  //     state.showCart = !state.showCart;
  //   },
  //   loadCart(state, action) {
  //     // Add this product to cartData array
  //     if (!state.cartData) state.cartData = [action.payload];
  //     else state.cartData.push(action.payload);
  //   },
  //   // TODO: agregarle un boton en la vista del Cart
  //   unloadCart(state, action) {
  //     // Remove all products from cartData array
  //     state.cartData = null;
  //   },
  //   checkoutCart(state, action) {
  //     // Remove all products from cartData array
  //     state.cartData = null;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(addItemToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.loading = false;
      // Add this product to cartData array
      state.cartData = action.payload;
      if (!state.cartData) state.cartData = [action.payload];
      else state.cartData.push(action.payload);
    });
    builder.addCase(addItemToCart.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
