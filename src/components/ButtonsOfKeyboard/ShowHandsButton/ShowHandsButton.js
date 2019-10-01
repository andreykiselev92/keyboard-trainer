import React from "react";
import "./ShowHandsButton.css";

const ShowHandsButton = (props) => {
  const showHandsClick = () => {
    props.showHandsHandle();
  }

  let showHandsClasses = ["showHands"];
  let showHandsTitle = props.showHands
    ? "Hide hands | Скрыть руки"
    : "Show hands | Показать руки";

  if (!props.showHands) {
    showHandsClasses.push("off");
  }

  return (
    <div
      onClick={showHandsClick}
      className={showHandsClasses.join(" ")}
      title={showHandsTitle}
    />
  );
}

export default ShowHandsButton;
