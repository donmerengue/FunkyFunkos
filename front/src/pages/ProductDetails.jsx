//react
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../store/SingleProductState";
//material UI
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
//styles
import "./ProductDetails.css";
//components
import Footer from "../components/Footer";
import CartActions from "../commons/CartActions";

const ProductDetails = () => {
  let { productName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(productName));
  }, []);

  const singleProductState = useSelector((state) => state.singleProduct);
  const product = useSelector((state) => {
    return state.singleProduct.product;
  });

  if (singleProductState.loading) {
    return <div>Loading...</div>;
  }
  if (singleProductState.error) {
    return <div>Error: {singleProductState.error}</div>;
  }

  return (
    <div id="body">
      <Paper className="container" elevation={10}>
        <div className="flex-item1">
          <img src={product.image} id="productImg" alt="funko" />
        </div>

        <div className="flex-item2">
          <div>
            <div className="title">{product.name}</div>
            <div className="flex-row">
              <span className="text">{product.rating}</span>
              <Rating
                value={parseFloat(product.rating)}
                precision={0.5}
                readOnly
                sx={{ marginLeft: "10px" }}
              />
            </div>
          </div>
          <div>
            <div className="subtitle">Description:</div>
            <div className="text">{product.description}</div>
          </div>
          <div className="flex-row">
            <span className="subtitle fs-5">Quantity:</span>
            <input
              type="number"
              defaultValue={1}
              min={1}
              placeholder="Qty"
              id="qtyInput"></input>
              <div className="subtitle fs-5">Total:</div>
              <div className="text  fs-5">{product.price}</div>
            <Button variant="contained">Add to Cart</Button>
            <CartActions />
          </div>
        </div>
      </Paper>

      <Footer />
    </div>
  );
};

export default ProductDetails;
