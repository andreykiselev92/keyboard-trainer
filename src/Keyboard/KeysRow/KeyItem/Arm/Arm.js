import React from "react";
import "./Arm.css";

export default function Arm(props) {
  const className = ["Arm"];
  className.push(`Arm-${props.side}-${props.finger}`);
  return <div className={className.join(" ")} />;
}
