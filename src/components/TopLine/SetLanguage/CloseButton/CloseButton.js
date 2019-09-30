import React from "react";
import "./CloseButton.css";

export default function CloseButton(props) {
  return (
    <span className="closeButton" onClick={props.close}>
      x
    </span>
  );
}
