import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
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
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="calenderTitle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img className="p3title" src={data.data.Title}></img>
        </div>
        <div
          className="p3contents"
          style={{ display: "flex", justifyContent: "center", width: "100vw" }}
        >
          <div className="p3a" style={{ marginRight: "13rem" }}>
            <img src={data.data.Front}></img>
          </div>
          <div className="p3b" style={{ marginLight: "13rem" }}>
            <img src={data.data.Back}></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CalendarContent;
