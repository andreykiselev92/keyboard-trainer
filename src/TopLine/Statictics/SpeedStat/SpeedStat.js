import React from "react";
import "./SpeedStat.css";

export default function SpeedStat(props) {
  return (
    <div className="SpeedStat" title="Characters per minute / Символов в минуту">
      {props.lastTime ? props.lastSpeed : 0}
    </div>
  );
}
