import React from "react";
import "./About.css";
import logo from "../../assets/WAK.png";
function About() {
  return (
    <div className="about">
      <section className="first">
        <div className="about-first-heading">
          WE MAKE HOPE
          <img className="about-first-logo" src={logo} />
          <div className="about-first-content">
            왁랩은 2019년에 설립된 팬 디자인 클럽으로, 트위치에서 방송중인
            스트리머 '우왁굳'을 사랑하는 사람들이 모여 만들었습니다.<br></br>
            디자이너 뿐만이 아니라 일러스트레이터, 성우, 프로그래머 등 각자의
            분야의 팀원들이 협력하며 의미있는 결과물을 만들기 위해 노력합니다.
          </div>
        </div>
      </section>
      <section className="second">
        <div className="about-second-heading">Logo</div>
        <div className="about-second-content">
          <img className="about-second-logo" src={logo} />
          우왁굳의 애칭 중 하나인 '왁'의 영문 WAK를 형상화한 타이포 타입의
          로고입니다.<br></br>
          W, A, K가 유기적으로 연결되어 있는 형태로,
        </div>
      </section>
    </div>
  );
}

export default About;
