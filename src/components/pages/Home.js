import React from "react";
import "./Home.css";
import bgText from "../../assets/back.png";
import logo from "../../assets/WAK.png";
import calendarPic from "../../assets/2019_calendar.png";

function Home() {
  return (
    <div className="home">
      <section className="showcase">
        <video
          src="https://cdn.videvo.net/videvo_files/video/free/2019-03/large_watermarked/181015_Extra_DanangDrone_004_preview.mp4"
          controls={false}
          muted
          loop
          autoPlay
        ></video>
        <div className="overlay"></div>
        <div className="vidText">
          <h3>WE ARE</h3>
          <h2>WAKLAB</h2>
        </div>
      </section>
      <section className="intro">
        <img className="bgText" src={bgText} />
        <img className="calendarPic" src={calendarPic} />
        <img className="waklogo" src={logo}></img>
        <h1>WE MAKE INNOVATION</h1>
        <p>
          왁랩은 2019년에 설립된 팬 디자인 클럽으로, 성장형 퇴물 스트리머
          '우왁굳'을 사랑하는 사람들이 모여 만들었습니다.
        </p>
        <p>
          디자이너 뿐만이 아니라 일러스트레이터, 성우, 프로그래머 등 각자의
          분야의 팀원들이 협력하며 의미있는 결과물을 만들기 위해 노력합니다.
        </p>
        <p>
          매년 연말공모전을 통해 달력과 굿즈 제작으로 시청자들에게 새로움을
          선사하고 있습니다.
        </p>
      </section>
    </div>
  );
}

export default Home;
