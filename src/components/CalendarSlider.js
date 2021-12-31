import React, { useState } from "react";
import { CalenderContent } from "../components/data/calenderData";
import CalendarContent from "./CalendarContent";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
function CalendarSlider() {
  const [current, setCurrent] = useState(0);
  const length = 12;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <i className="angle-left" onClick={prevSlide}></i>
      <i className="angle-right" onClick={nextSlide}></i>
      {CalenderContent.map((page, index) => {
        return (
          <AnimatePresence exitBeforeEnter>
            <div
              className={index === current ? "page active" : "page"}
              key={index}
            >
              {index === current && <CalendarContent data={page} />}
            </div>
          </AnimatePresence>
        );
      })}
    </div>
  );
}

export default CalendarSlider;
