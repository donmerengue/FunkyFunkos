import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import user from "./userState";
import products from "./ProductsState";
import singleProduct from "./SingleProductState";
import cart from "./cartState";

// TODO: traer los otros reducers
// cart: cartReducer, TODO: Ver si hay un Estado para el cart
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user,
    products,
    singleProduct,
    cart,
  },
});

export default store;
