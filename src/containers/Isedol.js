import React, { useState } from "react";
import { isedolProfileData } from "../components/data/isedolProfileData";
import IsedolProfile from "../components/IsedolProfile";
import Bg_main from "../assets/isedolMain/Bg_main.png";
import isedol_edge from "../assets/isedolMain/isedol_edge.png";
import isedol_title from "../assets/isedolMain/isedol_title.png";
import arrow from "../assets/isedolMain/gold_arrow.png";
import "./Isedol.css";

function Isedol() {
  //내일 작업할거
  const [chooseIsedol, setChooseIsedol] = useState({});
  const handleImageClick = (e) => {};
  return (
    <div className="isedol">
      <img className="edge" src={isedol_edge} alt="edge" />
      <div className="title">
        <img className="title_img" src={isedol_title} alt="title" />
      </div>
      <div className="isedolMain_bg_container">
        <img className="isedolMain_bg" src={Bg_main} alt="main" />
        <IsedolProfile
          isedolProfileData={isedolProfileData}
          handleImageClick={handleImageClick}
        />
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow" />
      </div>
      {/* TODO: 내일(월요일) 작업할 부분<IsedolDetail chooseIsedol={chooseIsedol} /> */}
    </div>
  );
}

export default Isedol;
