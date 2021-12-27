import React, { useCallback, useEffect, useState } from "react";
import { isedolProfileData } from "../components/data/isedolProfileData";
import IsedolProfile from "../components/IsedolProfile";
import Bg_main from "../assets/isedolMain/Bg_main.png";
import isedol_edge from "../assets/isedolMain/isedol_edge.png";
import isedol_title from "../assets/isedolMain/isedol_title.png";
import arrow from "../assets/isedolMain/gold_arrow.png";
import "./Isedol.css";
import ReactPageScroller from "react-page-scroller";
import { isedolsDetailData } from "../components/data/isedolsDetailData";
import IsedolDetail from "../components/IsedolDetail";
import Re_wind_inst from "../assets/RE_WIND_Inst.mp3";

function Isedol() {
  const [audio] = useState(new Audio(Re_wind_inst));
  const [plaing, setPlayer] = useState(true);

  //이세돌 프로필 클릭시 스테이트 변경
  const [chooseIsedol, setChooseIsedol] = useState({ currentIdol: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleIdolClick = (e) => {
    setChooseIsedol({ currentIdol: e.target.name });
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const audioPlay = useCallback(async (audio) => {
    try {
      await audio.play();
      audio.volume = 0.3;
    } catch (Err) {
      console.error(Err);
    }
  }, []);

  const audioPause = useCallback((audio) => {
    audio.pause();
  }, []);

  useEffect(() => {
    plaing ? audioPlay(audio) : audioPause(audio);
  }, [plaing, audioPlay, audioPause, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlayer(false));
    return () => {
      audioPause(audio);
      audio.removeEventListener("ended", () => setPlayer(false));
    };
  }, []);

  return (
    <div className="isedol">
      <ReactPageScroller>
        <section>
          <img className="edge" src={isedol_edge} alt="edge" />
          <div className="title">
            <img className="title_img" src={isedol_title} alt="title" />
          </div>
          <div className="isedolMain_bg_container">
            <img className="isedolMain_bg" src={Bg_main} alt="main" />
            <IsedolProfile
              isedolProfileData={isedolProfileData}
              handleImageClick={handleIdolClick}
            />
          </div>
          <div className="arrow">
            <img src={arrow} alt="arrow" />
          </div>
        </section>
        <section></section>
      </ReactPageScroller>
      {isModalOpen ? (
        <IsedolDetail
          isModalOpen={isModalOpen}
          chooseIsedol={chooseIsedol}
          isedol={isedolsDetailData[chooseIsedol.currentIdol]}
          handleModalClose={handleModalClose}
        />
      ) : null}
    </div>
  );
}

export default Isedol;
