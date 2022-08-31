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

  return (
    <Paper
      sx={{
        bgcolor: "background.main",
      }}>
      <ProductsGrid />
      <Footer />
    </Paper>
  );
};

export default Home;
