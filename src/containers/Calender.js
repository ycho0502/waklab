import React from "react";
import ReactPageScroller from "react-page-scroller";
import "./Calender.css";
import p1title from "../assets/calender/1P/p1title.png";
import p1desc from "../assets/calender/1P/p1desc.png";
import p2cont1 from "../assets/calender/2P/p2cont1.png";
import p2cont2 from "../assets/calender/2P/p2cont2.png";
import p2cont3 from "../assets/calender/2P/p2cont3.png";
import p3t from "../assets/calender/3P/1t.png";
import p3 from "../assets/calender/3P/1.png";
import p3a from "../assets/calender/3P/1a.png";
import p3b from "../assets/calender/3P/1b.png";

function Calender() {
  const mystyle = {
    backgroundImage: `url(${p3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  };
  return (
    <div className="calender">
      <ReactPageScroller>
        <section className="calenderFirst">
          <div className="calenderbg1">
            <img className="p1title" src={p1title}></img>
            <img className="p1desc" src={p1desc}></img>
          </div>
        </section>
        <section className="calenderSecond">
          <div className="calenderbg2">
            <img className="p2cont1" src={p2cont1}></img>
            <img className="p2cont2" src={p2cont2}></img>
            <img className="p2cont3" src={p2cont3}></img>
          </div>
        </section>
        <section className="calenderThird">
          <div className="calenderbg3" style={mystyle}>
            <div className="calenderTitle">
              <img className="p3title" src={p3t}></img>
            </div>
            <div className="p3contents">
              <div className="p3a">
                <img src={p3a}></img>
              </div>
              <div className="p3b">
                <img src={p3b}></img>
              </div>
            </div>
          </div>
        </section>
      </ReactPageScroller>
    </div>
  );
}

export default Calender;
