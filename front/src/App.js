// React
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Style
import "./App.css";
// Componentes
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/Register";
import SignIn from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/:productId/details" element={<ProductDetails />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
