import React, { useState } from "react";
import "./Teamcomic.css";

const Teamcomic = ({ slides }) => {
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
    <section className="teamslider">
      <i className="angle-left" onClick={prevSlide}></i>
      <i className="angle-right" onClick={nextSlide}></i>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "teamslide active" : "teamslide"}
            key={index}
          >
            {index === current && <img src={slide.image} className="teamcoimg"/>}
          </div>
        );
      })}
    </section>
  );
};

export default Teamcomic;
