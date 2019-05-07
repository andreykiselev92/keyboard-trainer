import React from "react";
import "./AutoBackspaceButton.css";

export default function AutoBackspaceButton(props) {
  function autoBackspaceClick() {
    props.autoBackspaceHandle();
  }

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
      &#8592;
    </div>
  );
}
