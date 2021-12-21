import React from "react";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard";

function Clothing() {
  return (
    <div className="clothing">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Clothing;
