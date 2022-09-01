// React
import React from "react";
// Redux
// Components & Commons
import Footer from "../components/Footer";
import ProductsGrid from "../components/ProductsGrid";
// Hooks
import useAuth from "../hooks/useAuth";
// Material
import Paper from "@mui/material/Paper";
// Imgs

const Home = () => {
  const user = useAuth();

  const containerStyle = {
    backgroundImage:
      "url()",
    height: "100vh",
    backgroundSize: "cover",
  };

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
        <ProductsGrid />
      </div>
      <Footer />
    </>
  );
};

export default Home;
