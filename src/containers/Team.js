import React from "react";
import Closing from "../components/Closing";
import Teamcomic from "../components/Teamcomic";
import { teamcomicData } from "../components/data/teamcomicData";

import "./Team.css";
function Team() {
  return (
    <div className="teambg">
     <Teamcomic slides={teamcomicData} />
     <Closing></Closing>
    </div>
    
  );   
}

export default Team;
