import React from "react";
import "./Home.css";

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
    </div>
  );
}

export default Home;
