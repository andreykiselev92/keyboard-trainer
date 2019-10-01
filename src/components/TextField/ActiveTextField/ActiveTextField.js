import React from "react";
import "./ActiveTextField.css";

const ActiveTextField = (props) => {
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
    <div className="textFieldItem" key={string}>
      {listSpans}
    </div>
  );
}

export default ActiveTextField;
