import React from "react";
import "./SpeedStat.css";

const SpeedStat = (props) => {
  return (
    <div
      className="speedStat"
      title="Characters per minute / Символов в минуту"
    >
      {props.lastTime ? props.lastSpeed : 0}
    </div>
  );
}

export default SpeedStat;
