import React from "react";
import "./FillColorsButton.css";

export default function FillColorsButton(props) {
  function fillColorClick() {
    props.fillColorHandle();
  }

  let fillColorClasses = ["fillColor"];
  let fillColorTitle = props.fillColor
    ? "Hide colors | Скрыть цвета"
    : "Show colors | Показать цвета";

  if (!props.fillColor) {
    fillColorClasses.push("off");
  }
  return (
    <div
      onClick={fillColorClick}
      className={fillColorClasses.join(" ")}
      title={fillColorTitle}
    />
  );
}
