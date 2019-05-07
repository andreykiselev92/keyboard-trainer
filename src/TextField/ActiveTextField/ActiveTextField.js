import React from "react";
import "./ActiveTextField.css";

export default function ActiveTextField(props) {
  let string = props.string;

  let strArr = string.split("");

  const listSpans = strArr.map((letter, index) => {
    let style = {};

    if (index < props.index) {
      style.color = "#7b7b7b";
    }

    if (index === props.index) {
      style.background = "#b6b6b6";
    }

    return (
      <span style={style} key={letter + index}>
        {letter}
      </span>
    );
  });

  return (
    <div className="TextFieldItem" key={string}>
      {listSpans}
    </div>
  );
}
