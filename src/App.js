import React from "react";
import Nav from "./Nav.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import Katie from "./images/katie.png";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card
        // img="./images/katie.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}
