import React from "react";
import ReactPageScroller from "react-page-scroller";
import "./Calender.css";
import p1title from "../assets/calender/1P/p1title.png";
import p1desc from "../assets/calender/1P/p1desc.png";
import p2cont1 from "../assets/calender/2P/p2cont1.png";
import p2cont2 from "../assets/calender/2P/p2cont2.png";
import p2cont3 from "../assets/calender/2P/p2cont3.png";
import CalendarSlider from "../components/CalendarSlider";

function Calender() {
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
            <div className="calender2Container">
              <img className="p2cont3" src={p2cont3}></img>
              <img className="p2cont2" src={p2cont2}></img>
            </div>
          </div>
        </section>
        <section className="calenderThird">
          <CalendarSlider />
        </section>
      </ReactPageScroller>
    </div>
  );
}

export default Calender;
