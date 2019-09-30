import React from "react";
import "./Arm.css";

const Arm = props => {
  const className = ["arm"];
  className.push(`arm-${props.side}-${props.finger}`);
  return <div className={className.join(" ")} />;
};

export default Arm;
