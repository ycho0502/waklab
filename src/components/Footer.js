import React from "react";
import "./Footer.css";
import logo from "../assets/waklab_logo_white.png";
import discord from "../assets/dischord_ico.png";

function Footer() {
  return (
    <div className="footer">
      <div className="first">
        <div className="logoCont">
          <div className="footerLogo">
            <img src={logo} />
            <div>ILLEGAL MERCHANDISE LAB</div>
          </div>
        </div>
        <div className="footerName">
          <div className="contact">CONTACT</div>
          <div className="discord">
            <img className="discordIcon" src={discord}></img>
            헬로제이#6019
          </div>
          <div className="email">hellloj_graphic@kakao.com</div>
        </div>
      </div>
      <hr />
      <div className="secondfooter">
        (주)왁랩코퍼레이션 | 대표 헬로제이 | 사업자 등록번호 724-09-그런거 없음
      </div>
    </div>
  );
}

export default Footer;
