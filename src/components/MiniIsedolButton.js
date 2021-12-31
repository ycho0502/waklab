import { useState } from "react";

const MiniIsedolButton = ({ photoCard, select, index, handleSelect }) => {
  return (
    <>
      <img
        className={`mini_isedol${select === index ? "_click" : ""}`}
        src={select === index ? photoCard.hover : photoCard.mini}
        onClick={() => handleSelect(index)}
      />
    </>
  );
};

export default MiniIsedolButton;
