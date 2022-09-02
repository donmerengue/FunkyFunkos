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
import SearchResults from "./pages/SearchResults";
import AdminUser from "./pages/AdminUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/:productName/details" element={<ProductDetails />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/search/:searchString" element={<SearchResults/>}/>
        <Route path="/user/admin" element={<AdminUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
