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

const CartActions = () => {
  // Dispatch Redux Actions
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const user = useSelector((state) => state.user.userData);
  // const counter = useSelector((state) => state.cart.counter);

  // Referencia a este producto
  const state = useSelector((state) => state);
  console.log("STATE desde Product.Details", state);
  const product = useSelector((state) => state.singleProduct.product);
  // TODO: pendiente traer la data del usuario
  // const itemData = { userId: user.id, productId: product.id, quantity: 1 };

  /* const itemDataFake = {
    userId: user.id,
    productName: "Funky Funko Name",
    quantity: 1,
    total: 100,
  }; */
  const itemDataFake = {
    userId: 1,
    productName: "Funky Funko Name",
    quantity: 1,
    total: 100,
  };

  // Cart State Handlers
  const incrementItemHandler = () => {
    dispatch(cartActions.increment());

    dispatch(addItemToCart(itemDataFake));

    // FIXME: cambiar itemDataFake por itemData cuando tenga la data del usuario y el producto
    // axios.post("/api/cart", { itemDataFake }).then((response) => {
    //   console.log(response.data);
    //   dispatch(cartActions.loadCart(response.data));
    // });
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
