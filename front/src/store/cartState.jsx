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
  ([product, user]) => {
    const quantity = 1;
    const total = 1200;
    const userId = user.id;
    console.log("PRODUCT added to cart", product);
    // console.log("USERRRR", user);

    return axios
      .post(
        `http://localhost:3001/api/cart/${product.id}`,
        { userId },
        {
          params: {
            quantity: quantity,
            total: total,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(
          "el resultado del axios de CartItems: ",
          response.data[0]
        );

        return response.data[0];
      })
      .catch((error) => error);
  }
);

export const loadCart = createAsyncThunk("LOAD-CART", (user) => {
  // const userId = user.id;
  // console.log("PRODUCT", product);
  console.log("USERRRR", user);

  return axios
    .get(
      `http://localhost:3001/api/cart/${user.id}`,
      // { userId },
      { withCredentials: true }
    )
    .then((response) => {
      console.log("el resultado del axios de UserCart: ", response.data);
      return response.data;
    })
    .catch((error) => error);
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
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
    // Add to cart
    builder.addCase(addItemToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.loading = false;
      // Add this product to cartData array
      // state.cartData = action.payload;
      // state.counter += action.payload.quantity;
      // if (!state.cartData) state.cartData = [action.payload];
      // else state.cartData.push(action.payload);
    });
    builder.addCase(addItemToCart.rejected, (state, action) => {
      state.error = action.error.message;
    });

    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.loading = false;
      state.counter = action.payload.length;
      // Add this product to cartData array
      // state.counter += action.payload.quantity;
      state.cartData = action.payload
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
