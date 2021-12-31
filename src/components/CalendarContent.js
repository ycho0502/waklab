import React from "react";

function CalendarContent(data) {
  const mystyle = {
    backgroundImage: `url(${data.data.Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  };
  return (
    <div className="calenderbg3" style={mystyle}>
      <div className="calenderTitle">
        <img className="p3title" src={data.data.Title}></img>
      </div>
      <div className="p3contents">
        <div className="p3a">
          <img src={data.data.Front}></img>
        </div>
        <div className="p3b">
          <img src={data.data.Back}></img>
        </div>
      </div>
    </div>
  );
}

export default CalendarContent;
