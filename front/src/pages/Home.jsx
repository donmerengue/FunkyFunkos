// React
import React from "react";
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/ProductsState";
// Components & Commons
import Footer from "../components/Footer";
import ProductsGrid from "../components/ProductsGrid";
// Hooks
import useAuth from "../hooks/useAuth";
// Material
import Paper from "@mui/material/Paper";
// Imgs

const Home = () => {
  const containerStyle = {
    backgroundImage:
      "url()",
    height: "100vh",
    backgroundSize: "cover",
  };

  const user = useAuth();
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.products.productsList);
  const productsState = useSelector((state) => state.products);

  
  if (productsState.loading) {
    return <div>Loading...</div>;
  }
  if (productsState.error) {
    return <div>Error: {productsState.error}</div>;
  }

  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://wc.wallpaperuse.com/wallp/30-302906_s.jpg"
              height="360"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="home" style={containerStyle}>
        <ProductsGrid products={products} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
