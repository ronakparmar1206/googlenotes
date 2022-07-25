import React from "react";
import "./header.css";
import logo from "./Images/logo.webp";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>Keep</h1>
    </div>
  );
}

export default Header;
