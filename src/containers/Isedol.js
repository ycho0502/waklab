import React, { useState, useCallback } from "react";
import BG from "../assets/isedolsDetail/Profile_bg.png";

import "./Isedol.css";

import intro_clock from "../assets/isedolMain/intro_clock.png";
import IsedolMainComp from "../components/IsedolMainComp";

function Isedol() {
  //페이지 시작시
  const [isStart, setIsStart] = useState(false);
  const [isFadeOut, setFadeOut] = useState(false);

  const handlePageStart = useCallback(() => {
    setIsStart(true);
    setTimeout(() => {
      setFadeOut(true);
    }, 3000);
  });

  return (
    <div className="isedol">
      <div
        className={`intro_clock ${isStart ? "fadeout" : ""} ${
          isFadeOut ? "clock_none" : ""
        }`}
      >
        <img
          onClick={handlePageStart}
          className={`intro_clock_img`}
          src={intro_clock}
          alt="intro"
        />
        <img className={`intro_background`} src={BG} />
      </div>
      <IsedolMainComp isStart={isStart} />
    </div>
  );
}

export default Isedol;
