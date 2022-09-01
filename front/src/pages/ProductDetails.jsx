//react
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../store/singleProductState";
//material UI
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
//styles
import "./ProductDetails.css";
//components
import Footer from "../components/Footer";
import CartActions from "../commons/CartActions";
// Utils
import { replaceUnderscore } from "../utils/editProductName";

const ProductDetails = () => {
  let { productName } = useParams();
  console.log("productName", productName);
  // FIXME: 31/8 hay que flexibilizar search desde ruta "/:search" del back 
  productName = replaceUnderscore(productName.toUpperCase());
  console.log(productName)

  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct.product);
  const singleProductState = useSelector((state) => state.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct(productName));
  }, []);

  console.log("el product es:", product);

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

        {/*   const containerStyle = {
   backgroundImage:
     "url(https://fondosmil.com/fondo/17538.jpg)",
   width: "6000px",
   height: "6000px",
 };

 return (
   <div style={containerStyle}>
     <img src={singleProduct.thumbnail} /> */}

        <div className="flex-item2">
          <div>
            <div className="title">{product.name}</div>
            <div className="flex-row">
              <span className="text">{product.rating}</span>
              <Rating
                value={product.rating}
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
            <span>Quantity:</span>
            <input
              type="number"
              defaultValue={1}
              min={1}
              placeholder="Qty"
              id="qtyInput"></input>
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
