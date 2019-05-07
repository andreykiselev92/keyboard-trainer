import React from "react";
import "./ButtonsOfKeyboard.css";
import FillColorsButton from "./FillColorsButton/FillColorsButton";
import ShowKeyboardButton from "./ShowKeyboardButton/ShowKeyboardButton";
import ShowHandsButton from "./ShowHandsButton/ShowHandsButton";
import AutoBackspaceButton from "./AutoBackspaceButton/AutoBackspaceButton";

export default function ButtonsOfKeyboard(props) {
  return (
    <div className="ButtonsOfKeyboard">
      {props.showKeyboard ? <FillColorsButton {...props} /> : null}
      {props.showKeyboard ? <ShowHandsButton {...props} /> : null}
      <ShowKeyboardButton {...props} />
      <AutoBackspaceButton {...props} />
    </div>
  );
}
