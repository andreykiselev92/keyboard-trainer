import React from "react";
import "./TopLine.css";

import Statistics from "./Statictics/Statictics";
import SetLanguage from "./SetLanguage/SetLanguage";

export default function TopLine(props) {
  return (
    <div className="TopLine">
      <SetLanguage changeLanguage={props.changeLanguage} />
      <Statistics {...props} />
    </div>
  );
}
