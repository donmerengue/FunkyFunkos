import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, cartActions } from "../store/cartState";
// Material
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { StarRateOutlined } from "@mui/icons-material";
// Hooks
import useAuth from "../hooks/useAuth";

const CartActions = () => {
  // Dispatch Redux Actions
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const user = useAuth();
  console.log("user desde cartActions", user);
  // const user = useSelector((state) => state.user.userData);
  // const counter = useSelector((state) => state.cart.counter);

  // Referencia a este producto
  const state = useSelector((state) => state);
  console.log("STATE desde CartActions", state);
  const product = useSelector((state) => state.singleProduct.product);

  // Cart State Handlers
  const incrementItemHandler = () => {
    // dispatch(cartActions.increment());
    dispatch(addItemToCart([product, user]));
  };

  const decrementItemHandler = () => {
    dispatch(cartActions.decrement());
  };
  // TODO: add alert when clicking to confirm & prevent accidental emptying
  const removeItemHandler = () => {
    if (showCart) dispatch(cartActions.removeItem());
  };

  return (
    <div>
      {" "}
      <IconButton variant="contained" onClick={incrementItemHandler}>
        <AddShoppingCartIcon fontSize="small"></AddShoppingCartIcon>
      </IconButton>
      <IconButton variant="contained" onClick={decrementItemHandler}>
        <RemoveIcon fontSize="small"></RemoveIcon>
      </IconButton>
      {/* TODO: ver si agrego para sacar todos los items del cart */}
      {/* {showCart ? (
        <IconButton variant="contained" onClick={removeItemHandler}>
          <RemoveShoppingCartOutlinedIcon fontSize="small"></RemoveShoppingCartOutlinedIcon>
        </IconButton>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default CartActions;
