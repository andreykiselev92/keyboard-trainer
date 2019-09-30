import React from "react";
import "./ButtonsOfKeyboard.css";
import FillColorsButton from "./FillColorsButton/FillColorsButton";
import ShowKeyboardButton from "./ShowKeyboardButton/ShowKeyboardButton";
import ShowHandsButton from "./ShowHandsButton/ShowHandsButton";
import AutoBackspaceButton from "./AutoBackspaceButton/AutoBackspaceButton";

const ButtonsOfKeyboard = props => {
  return (
    <div className="buttonsOfKeyboard">
      <ShowKeyboardButton {...props} />
      <AutoBackspaceButton {...props} />
      {props.showKeyboard ? <FillColorsButton {...props} /> : null}
      {props.showKeyboard ? <ShowHandsButton {...props} /> : null}
    </div>
  );
};

export default ButtonsOfKeyboard;
