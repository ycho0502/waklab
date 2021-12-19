import React from "react";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";

function Clothing() {
  return (
    <div className="clothing">
      <h1>Clothing</h1>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Clothing;
