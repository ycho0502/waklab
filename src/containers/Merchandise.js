import React from "react";
import { merchanSliderData } from "../components/data/merchanSliderData";
import { merchandiseData } from "../components/data/merchandiseData";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/ProductCard";

function Merchandise() {
  return (
    <><div className="clothing">
      <ImageSlider slides={merchanSliderData} />
    </div>
    <div className="holder">
        <Product data={merchandiseData} className="panchiilco" title="PANCHI LINE" caid="10"/>
        <Product data={merchandiseData} className="panchiilco" title="ILCO LINE" caid="20"/>
        <Product data={merchandiseData} className="wakming" title="WAKMING OUT LINE" caid="30"/>
      </div></>
  );
  
}

export default Merchandise;
