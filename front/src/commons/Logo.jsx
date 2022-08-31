import React from "react";
import { Link } from "react-router-dom";
import batman from "../assets/gamer-batman-funko.png";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo luckiest-font">
        Funky Funkos{" "}
        <img
          className="background-container"
          src={batman}
          alt="logo funko"
          style={{ maxWidth: "56px" }}
        />
      </h1>
    </Link>
  );
};

export default Logo;
