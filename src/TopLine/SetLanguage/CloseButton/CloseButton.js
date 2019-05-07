import React from "react";
import "./CloseButton.css";

export default function CloseButton(props) {
  return (
    <span className="CloseButton" onClick={props.close}>
      x
    </span>
  );
}
