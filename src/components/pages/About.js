import React from "react";
import "./About.css";
import logo from "../../assets/WAK.png";
function About() {
  return (
    <div className="about">
      <section className="first">
        <div className="about-heading">
          WE MAKE HOPE
          <img className="about-logo" src={logo} />
          <div className="about-content">
            왁랩은 2019년에 설립된 팬 디자인 클럽으로, 트위치에서 방송중인
            스트리머 '우왁굳'을 사랑하는 사람들이 모여 만들었습니다.<br></br>
            디자이너 뿐만이 아니라 일러스트레이터, 성우, 프로그래머 등 각자의
            분야의 팀원들이 협력하며 의미있는 결과물을 만들기 위해 노력합니다.
          </div>
        </div>
      </section>
      <section className="second">Second page</section>
    </div>
  );
}

export default About;
