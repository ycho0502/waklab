import {
  useCallback,
  useEffect,
  useState,
} from "react/cjs/react.development";
import ReactPageScroller from "react-page-scroller";
import { isedolsDetailData } from "../components/data/isedolsDetailData";
import IsedolDetail from "../components/IsedolDetail";
import Re_wind_inst from "../assets/RE_WIND_Inst.mp3";
import Particle from "../components/Particle";
import IsedolMerchandise from "../components/IsedolMerchandise";
import { isedolProfileData } from "../components/data/isedolProfileData";
import IsedolProfile from "../components/IsedolProfile";
import Bg_main from "../assets/isedolMain/Bg_main.png";
import isedol_edge from "../assets/isedolMain/isedol_edge.png";
import isedol_title from "../assets/isedolMain/isedol_title.png";
import arrow from "../assets/isedolMain/gold_arrow.png";

const IsedolMainComp = ({ isStart }) => {
  const [audio] = useState(new Audio(Re_wind_inst));
  const [plaing, setPlayer] = useState(true);

  //이세돌 프로필 클릭시 스테이트 변경
  const [chooseIsedol, setChooseIsedol] = useState({
    currentIdol: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 파티클 핸들러
  const [particle, setParticle] = useState(true);
  const [position, setPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const handleReverse = () => {
    setParticle(!particle);
  };

  const handleIdolClick = (idx, elePosition) => {
    console.log(elePosition, idx);
    setPosition({
      top: elePosition.top,
      left: elePosition.left,
    });
    setChooseIsedol({ currentIdol: idx });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const audioPlay = useCallback(async (audiointerfase) => {
    try {
      await audiointerfase.play();
      audiointerfase.volume = 0.1;
    } catch (Err) {
      console.error(Err);
    }
  }, []);

  const audioPause = useCallback((audiointerfase) => {
    audio.pause();
  }, []);

  useEffect(() => {
    isStart ? audioPlay(audio) : audioPause(audio);
  }, [isStart, audioPlay, audioPause, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlayer(false));
    return () => {
      audioPause(audio);
      audio.removeEventListener("ended", () => setPlayer(false));
    };
  }, [audio, audioPlay, audioPause, plaing]);

  return (
    <>
      <ReactPageScroller>
        <section>
          <Particle particle={particle} />
          <img className="edge" src={isedol_edge} alt="edge" />
          <div className="title">
            <img
              className="title_img"
              src={isedol_title}
              alt="title"
            />
          </div>
          <div className="isedolMain_bg_container">
            <img className="isedolMain_bg" src={Bg_main} alt="main" />
            <IsedolProfile
              isedolProfileData={isedolProfileData}
              handleImageClick={isModalOpen ? null : handleIdolClick}
              isModalOpen={isModalOpen}
            />
          </div>
          <div className="arrow">
            <img
              className="arrow_image"
              src={arrow}
              alt="arrow"
              onClick={handleReverse}
            />
          </div>
        </section>
        <section className="merchandise_container">
          <IsedolMerchandise />
        </section>
      </ReactPageScroller>
      {isModalOpen ? (
        <IsedolDetail
          isModalOpen={isModalOpen}
          chooseIsedol={chooseIsedol}
          isedol={isedolsDetailData[chooseIsedol.currentIdol]}
          handleModalClose={handleModalClose}
          top={position.top}
          left={position.left}
        />
      ) : null}
    </>
  );
};

export default IsedolMainComp;
