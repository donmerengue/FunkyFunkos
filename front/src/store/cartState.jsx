import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartData: null, counter: 0, showCart: false };

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
    removeItem(state, action) {
      // FIXME: Pensar como se actualizaria bien el numero de productos
      state.counter = state.counter;
      state.cartData.filter(
        (cartItem) => cartItem.id === action.payload.id
      );
    },
    showCounter(state) {
      return state.counter;
    },
    toggleCart(state, action) {
      state.showCart = !state.showCart;
    },
    loadCart(state, action) {
      // Add this product to cartData array
      if (!state.cartData) state.cartData = [action.payload];
      else state.cartData.push(action.payload);
    },
    // TODO: agregarle un boton en la vista del Cart
    unloadCart(state, action) {
      // Remove all products from cartData array
      state.cartData = null;
    },
    checkoutCart(state, action) {
      // Remove all products from cartData array
      state.cartData = null;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
