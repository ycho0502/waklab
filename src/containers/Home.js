import React from "react";
import "./Home.css";
import bgText from "../assets/back.png";
import logo from "../assets/WAK.png";
import calendarPic from "../assets/2019_calendar.png";
import charterBar from "../assets/chapter_bar.png";
import waklabvideo from "../assets/waklab.mp4";
import bossJ from "../assets/helloj.png";
import ImageSlider from "../components/ImageSlider";
import { companyData } from "../components/data/companyData";
import TeamProfile from "../components/TeamProfile";
import { portfolioData } from "../components/data/portfolioData";
import { newproductData } from "../components/data/newproductData";

function Home() {
  return (
    <div className="home" id="home">
      <section className="showcase">
        <video
          src={waklabvideo}
          controls
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop
          controlsList="nodownload"
        ></video>
      </section>
      <section className="intro" id="about">
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

      <div className="divider">
        <img src={charterBar} />
      </div>

      <section className="ceoIntro">
        <div className="sectionTitle">대표 인사말 및 프로젝트 소개</div>
        <div className="contentContainer">
          <div className="sectionContent">
            <p>
              안녕하세요, 불법 굿즈 연구소 왁랩의 대표 헬로제이입니다.<br></br>
              어쩌다보니 첫 활동을 시작한지 2년만에 이렇게 인사를 드리게
              되었습니다.<br></br> 왁랩은 애초에 썸네일러, 영상 편집자들과
              소스를 공유하려고 만든 그룹인데 <br></br>어쩌다 이렇게까지 됐는지
              저도 잘 모르겠습니다.<br></br> 저도 좀 무서워요.
            </p>
            <br></br>
            <br></br>
            <p>
              일단 시작한 일이니까 끝은 봐야할 것 같아서 진행한건데<br></br>
              일이 너무 커진 것 같네요. 개같이 망하지만 않으면 좋을 것 같습니다.
            </p>
            <br></br>
            <br></br>
            <p>
              간단하게 이번 프로젝트를 소개해 드리자면<br></br> 2019년에
              왁랩에서 출품한 프로젝트의 연장선이라고 보시면될 듯 합니다.
              <br></br> 저번 프로젝트에서 아쉬웠던 점을 보완하여<br></br>
              퀄리티를 조금 올리고 출품 형식을 새롭게 바꿔보았습니다.
            </p>
            <br></br>
            <br></br>
            <p>
              이번 프로젝트는 내수와 일코 사이의 중간 지점을 찾기 위해 많이
              고민했습니다.<br></br> 어차피 정식 굿즈도 아니고 나올 일도 없을것
              같으니<br></br>
              그냥 멀티버스의 우왁굳 굿즈로 생각하시면 될 것 같습니다.<br></br>
              아, 대신 왁굳형 허락 하에 컨텐츠로 나눠드릴 수는 있을 것 같습니다.
              나~중에~
            </p>
            <br></br>
            <br></br>
            <p>
              웹사이트는 연말공모전 최초로 시도해보는 새로운 포맷이라<br></br>
              시청자분들께서는 익숙하지 않으실 수도 있습니다.<br></br> 왁굳형이
              자유롭게 완급을 조절하기에는 가장 적합한 방식인듯 하여<br></br>
              웹사이트 포맷을 선택하였으니 너그러이 이해해주시면 감사하겠습니다.
            </p>
          </div>
          <div className="contentImg">
            <img src={bossJ} />
          </div>
        </div>
      </section>
      <div className="divider">
        <img src={charterBar} />
      </div>
      <section className="logoShowcase">
        <div className="sectionLogoTitle">COMPANY LOGO</div>
        <ImageSlider slides={companyData} />
      </section>

      <div className="divider">
        <img src={charterBar} />
      </div>

      <section className="team">
        <div className="sectionTitle">팀 멤버 소개</div>
        <TeamProfile />
      </section>

      <div className="divider">
        <img src={charterBar} />
      </div>

      <section className="portfolio">
        <div className="sectionLogoTitle">WAKLAB'S PORTFOLIO</div>
        <ImageSlider slides={portfolioData} />
      </section>

      <div className="divider">
        <img src={charterBar} />
      </div>

      <section className="newProducts">
        <div className="sectionLogoTitle">2022 NEW PRODUCTS</div>
        <ImageSlider slides={newproductData} />
      </section>
    </div>
  );
}

export default Home;
