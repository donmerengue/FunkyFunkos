import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartState";
// Components
import CartIcon from "../commons/CartIcon";
import CartItem from "../commons/CartItem";
import CheckoutModal from "./CheckoutModal";
// Material
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { lightGreen } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Drawer, Divider, ListItemText } from "@mui/material/";
import { Grid, Card, CardContent, CardActions } from "@mui/material";

export default function CartDrawer() {
  // Cart State
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cartCounter = useSelector((state) => state.cart.counter);

  // Drawer properties & logic
  const [state, setState] = React.useState({
    top: false,
  });
  const anchor = "top";

  const location = useLocation();

  // Close cart when changing URL
  useEffect(() => {
    setState({ ...state, [anchor]: false });
  }, [location]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    dispatch(cartActions.toggleCart());
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "15vh", margin: "2vh" }}>
        <Card
          variant="outlined"
          sx={{ minWidth: "50vw", bgcolor: "#FCF3EE" }}>
          <CardContent>
            <ListItemText className="text-center">
              <CartIcon inCart={true} />{" "}
              <span className="luckiest-font fw-bold fs-4">
                Funky Cart
              </span>
            </ListItemText>
            <Divider />
            <br />
            <br />
            <br />

            {cartCounter > 0 ? (
              <>
                <CartItem />
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    p: 1,
                    m: 1,
                  }}>
                  <h2>Total: $</h2>
                </Box>
                <Divider />
              </>
            ) : (
              <h4 className="text-center">Tu carrito está vacío</h4>
            )}
          </CardContent>
          {cartCounter > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                p: 1,
                m: 1,
              }}>
              <CardActions>
                <CheckoutModal></CheckoutModal>
              </CardActions>
            </Box>
          )}
        </Card>
      </Grid>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        {/* <CartIcon toggleDrawer={(anchor) => toggleDrawer(anchor, true)}></CartIcon> */}
        <Badge badgeContent={cartCounter} sx={{ color: lightGreen[100] }}>
          <IconButton
            variant="primary"
            onClick={toggleDrawer(anchor, true)}>
            <ShoppingCartIcon
              sx={{ color: lightGreen[50], fontSize: 28 }}
            />
          </IconButton>
        </Badge>

        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "white.main",
            },
          }}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
