// React
import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartState";
// Components
// Material
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { lightGreen } from "@mui/material/colors";

const CartIcon = ({ toggleDrawer, inCart }) => {
  console.log(inCart);
  const anchor = "right";
  const dispatch = useDispatch();
  // Cart State
  const cartCounter = useSelector((state) => state.cart.counter);
  const showCart = useSelector((state) => state.cart.showCart);

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const showCartHandler = () => {
    console.log("cart handler");
    dispatch(cartActions.toggleDrawer());
  };

  return (
    <Badge badgeContent={cartCounter} sx={{ color: lightGreen[100] }}>
      <IconButton
        variant="primary"
        // onClick={showCartHandler}
        onClick={() => toggleDrawer(anchor, true)}
        // toggleDrawer={(anchor) => toggleDrawer(anchor, true)}
      >
        <ShoppingCartIcon sx={{ color: "primary.main", fontSize: 32 }} />
      </IconButton>
    </Badge>
  );
};

export default CartIcon;
