import React from "react";
import Logo from "./images/airbnb 1.png";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="airbnb-logo" src={Logo} alt="logo"></img>
        </div>
      </nav>
    </div>
  );
}
