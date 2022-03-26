import React from "react";
import Katie from "./images/katie.png";
import Star from "./images/star.png";

export default function Card(props) {
  return (
    <div className="katie-container">
      <img src={`./images/${props.img}`} className="katie--image"></img>
      <div className="rating">
        <img src={Star} alt="star-image" className="star--image"></img>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount})</span>
        <span className="grey"> ·{props.country}</span>
      </div>
      <p className="katie-header">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
