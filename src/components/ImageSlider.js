import React, { useState } from "react";
// import { SliderData } from "./data/SliderData";
import ProductCard from "./ProductCard";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <i className="angle-left" onClick={prevSlide}></i>
      <i className="angle-right" onClick={nextSlide}></i>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} />}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
