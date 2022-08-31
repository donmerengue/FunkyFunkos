import * as React from "react";
import { useNavigate } from "react-router";
// Material
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import StyledInput from "../commons/SelectStyled";
import StyledSelect from "../commons/InputStyled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FCF3EE",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CheckoutModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  // TODO: 30/8 traer datos del back
  const orderId = 1;
  const checkoutHandler = () => {
    handleClose();

    navigate(`/checkout/${orderId}`);
  };
  /* const checkoutHandler = () => {
    dispatch(cartActions.checkoutCart());
  }; */

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        onClick={handleOpen}
        sx={{ margin: "0 auto", display: "flex" }}>
        Continuar Compra
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={style}>
            {/* TODO: 30/8 Agregar direccion de usuario como placeholder */}
            <StyledInput />
            <br />
            <br />
            <StyledSelect />
            <br />
            <Button
              size="large"
              variant="contained"
              onClick={checkoutHandler}
              sx={{ margin: "0 auto", display: "flex" }}>
              Comprar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
