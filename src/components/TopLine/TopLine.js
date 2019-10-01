import React from "react";
import "./TopLine.css";

import Statistics from "./Statictics/Statictics";
import SetLanguage from "./SetLanguage/SetLanguage";

const TopLine = (props) => {
  return (
    <div className="topLine">
      <SetLanguage changeLanguage={props.changeLanguage} />
      <Statistics {...props} />
    </div>
  );
}

export default TopLine;