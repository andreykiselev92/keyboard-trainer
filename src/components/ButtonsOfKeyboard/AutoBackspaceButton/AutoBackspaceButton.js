import React from "react";
import "./AutoBackspaceButton.css";

const AutoBackspaceButton = props => {
  const autoBackspaceClick = () => {
    props.autoBackspaceHandle();
  };

  let autoBackspaceClasses = ["autoBackspace"];
  let autoBackspaceTitle = props.autoBackspace
    ? "Turn Off Auto Backspase | Выключить Автоматический Backspace"
    : "Turn On Auto Backspase | Включить Автоматический Backspace";

  if (!props.autoBackspace) {
    autoBackspaceClasses.push("off");
  }
  return (
    <div
      onClick={autoBackspaceClick}
      className={autoBackspaceClasses.join(" ")}
      title={autoBackspaceTitle}
    >
      &nbsp;
    </div>
  );
};

export default AutoBackspaceButton;
