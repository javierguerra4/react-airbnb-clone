import React from "react";
import Katie from "./images/katie.png";

export default function Card() {
  return (
    <div className="katie-container">
      <img src={Katie} alt="Katie-image" className="katie--image"></img>
      <h1 className="katie-header">Life lessons with Katie Zaferes</h1>
    </div>
  );
}
