import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../commons/CartItem";
import { cartActions } from "../store/cartState";

// TODO: armar el pedido a todos los items de la DB aca

const CartItems = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.counter);
  const state = useSelector((state) => state);
  console.log(state);
  const cartData = useSelector((state) => state.cart.cartData);
  console.log("cartData desde CartItems", cartData);

  // Update cart data when counter changes
  // TODO: 30/8 volver a montar esto cuando este ok la DB
  // useEffect(() => {
  //   axios.get("/api/cart").then((response) => {
  //     console.log(response.data);
  //     dispatch(cartActions.loadCart(response.data));
  //   });
  // }, [counter]);

  return (
    <div>
      {cartData.map((item) => (
        <CartItem item={item}></CartItem>
      ))}
    </div>
  );
};

export default CartItems;
