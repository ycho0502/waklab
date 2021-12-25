import React, { useState } from "react";
import "./TeamProfile.css";
import {
  Illustrator,
  Designer,
  Model,
  Programmer,
  Media,
  Special,
} from "./data/TeamData";

function TeamProfile() {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);

  const handleClick1 = () => {
    setClick1(!click1);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
    setClick6(false);
  };

  const handleClick2 = () => {
    setClick2(!click2);
    setClick1(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
    setClick6(false);
  };

  const handleClick3 = () => {
    setClick3(!click3);
    setClick1(false);
    setClick2(false);
    setClick4(false);
    setClick5(false);
    setClick6(false);
  };

  const handleClick4 = () => {
    setClick4(!click4);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick5(false);
    setClick6(false);
  };

  const handleClick5 = () => {
    setClick5(!click5);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick6(false);
  };

  const handleClick6 = () => {
    setClick6(!click6);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };

  return (
    <div className="teamProfile">
      <ul className="pagination">
        <li className={click1 ? "active" : null} onClick={handleClick1}>
          <a>디자인</a>
        </li>
        <li className={click2 ? "active" : null} onClick={handleClick2}>
          <a>일러스트</a>
        </li>
        <li className={click3 ? "active" : null} onClick={handleClick3}>
          <a>모델</a>
        </li>
        <li className={click4 ? "active" : null} onClick={handleClick4}>
          <a>프로그래머</a>
        </li>
        <li className={click5 ? "active" : null} onClick={handleClick5}>
          <a>미디어</a>
        </li>
        <li className={click6 ? "active" : null} onClick={handleClick6}>
          <a style={{ fontFamily: "dolce_vita_heavybold" }}>Special Thanks</a>
        </li>
      </ul>
      <div className="teamNames">
        {click1
          ? Designer.map((element, index) => {
              return <div>{element.name}</div>;
            })
          : null}
        {click2
          ? Illustrator.map((element, index) => {
              return <div>{element.name}</div>;
            })
          : null}
        {click3
          ? Model.map((element, index) => {
              return <div>{element.name}</div>;
            })
          : null}
        {click4
          ? Programmer.map((element, index) => {
              return <div>{element.name}</div>;
            })
          : null}
        {click5
          ? Media.map((element, index) => {
              return <div>{element.name}</div>;
            })
          : null}
        {click6
          ? Special.map((element, index) => {
              return <div>{element.name}</div>;
            })
          : null}
      </div>
    </div>
  );
}

export default TeamProfile;
