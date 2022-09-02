import React from "react";
import { useSelector } from "react-redux";
import CartActions from "./CartActions";
import batman from "../assets/gamer-batman-funko.png";

const CartItem = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  console.log("cartData desde cartItem", cartData);

  // TODO: 30/8 necesito el nombre y la imagen del producto!!

  return (
    <div className="text-center">
      {cartData.map((cartItem, i) => (
        <div key={i} className="text-center">
          <div className="row">
            <div className="col-5">
              <img
                src={cartItem.funko.image}
                alt="logo funko"
                style={{ maxWidth: "56px" }}
              />
            </div>
            <div className="col-3 fs-5 fw-semibold fst-italic">
              {cartItem.funko.name}
            </div>
            <div className="col-2">
              <CartActions />
            </div>
            <div className="col-1 fs-5">{cartItem.quantity}</div>
            <div className="col-1 fs-5">${cartItem.total}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
