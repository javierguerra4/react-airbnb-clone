import React from "react";
import Katie from "./images/katie.png";
import Star from "./images/Star.png";

export default function Card() {
  return (
    <div className="katie-container">
      <img src={Katie} alt="Katie-image" className="katie--image"></img>
      <div className="rating">
        <image src={Star} alt="star-image" className="star--image"></image>
        <p>5.0</p>
      </div>
      <h1 className="katie-header">Life lessons with Katie Zaferes</h1>
    </div>
  );
}
