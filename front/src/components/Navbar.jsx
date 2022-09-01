import axios from "axios";
// React
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userState";
// Components - Commons
import Logo from "../commons/Logo";
import CartDrawer from "./CartDrawer";
// Styles
import "./Navbar.css";
// Material
import { IconButton } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { LegendToggle, Login, Logout } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { message } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  console.log("user desde navbar", user);

  let isAdmin;
  if (user) isAdmin = true;

  const dispatch = useDispatch();

  const logOutHandler = () => {
    axios
      .get("http://localhost:3001/api/user/login", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(userActions.logout());
        message.error("You have logged out");
        navigate("/");
      });
  };

  return (
    <div>
      <nav
        className="navbar shadow-lg rounded"
        style={{ backgroundColor: "#DE822C" }}>
        <div className="container-fluid">
          <form className="d-flex" role="search">
            {/* TODO: esto deberia desplegarse al cliquear el search  */}
            <input
              className="form-control me-2"
              type="search"
              placeholder="Encontra tu Funko Pop!"
              aria-label="Search"
            />
            <IconButton variant="primary" type="submit">
              <SearchIcon sx={{ color: lightGreen[50], fontSize: 28 }} />
            </IconButton>
          </form>

          <Logo />

          <div className="contenedor">
            {/* <Cart /> */}
            <CartDrawer />

            {user && isAdmin ? (
              <IconButton variant="primary">
                <AdminPanelSettingsOutlinedIcon
                  sx={{ color: lightGreen[50], fontSize: 28 }}
                />
              </IconButton>
            ) : (
              <IconButton variant="primary">
                <AccountBoxIcon
                  sx={{ color: lightGreen[50], fontSize: 28 }}
                />
              </IconButton>
            )}

            {/* TODO: perfil */}
            {user ? (
              <IconButton variant="primary" onClick={logOutHandler}>
                <Logout sx={{ color: lightGreen[50], fontSize: 28 }} />
              </IconButton>
            ) : (
              <Link to="/login">
                <IconButton variant="primary">
                  <Login sx={{ color: lightGreen[50], fontSize: 28 }} />
                </IconButton>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
