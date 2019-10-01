import React from "react";
import "./ShowKeyboardButton.css";

const ShowKeyboardButton = (props) => {
  const showKeyboardClick = () => {
    props.showKeyboardHandle();
  }

  let showKeyboardClasses = ["showKeyboard"];
  let showKeyboardTitle = props.showKeyboard
    ? "Hide keyboard | Скрыть клавиатуру"
    : "Show keyboard | Показать клавиатуру";

  if (!props.showKeyboard) {
    showKeyboardClasses.push("off");
  }
  return (
    <div
      onClick={showKeyboardClick}
      className={showKeyboardClasses.join(" ")}
      title={showKeyboardTitle}
    />

  );
}

export default ShowKeyboardButton;
