import React from "react";
import Katie from "./images/katie.png";
import Star from "./images/star.png";

export default function Card() {
  return (
    <div className="katie-container">
      <img src={Katie} alt="Katie-image" className="katie--image"></img>
      <div className="rating">
        <img src={Star} alt="star-image" className="star--image"></img>
        <span>5.0</span>
        <span>(6) •</span>
        <span>USA</span>
      </div>
      <p className="katie-header">Life lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  );
}
