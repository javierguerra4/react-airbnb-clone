import React from "react";
import Katie from "./images/katie.png";
import Star from "./images/star.png";

export default function Card(props) {
  return (
    <div className="katie-container">
      <img src={Katie} alt="Katie-image" className="katie--image">
        {props.img}
      </img>
      <div className="rating">
        <img src={Star} alt="star-image" className="star--image"></img>
        <span>{rating}</span>
        <span className="grey">{reviewCount}</span>
        <span className="grey">{country}</span>
      </div>
      <p className="katie-header">{title}</p>
      <p>
        <span className="bold">{price}</span> / person
      </p>
    </div>
  );
}
