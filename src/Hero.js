import React from "react";
import Group from "./images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={Group} alt="Photo grid" className="hero-image"></img>
      <h1 className="hero-h1"> Online Experiences</h1>
      <p className="hero-paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
