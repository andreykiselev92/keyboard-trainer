import React from "react";
import "./CloseButton.css";

const CloseButton = (props) => {
  return (
    <span className="closeButton" onClick={props.close}>
      x
    </span>
  );
}

export default CloseButton;
