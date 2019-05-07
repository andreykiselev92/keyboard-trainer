import React from "react";
import "./SetText.css";
import CloseButton from "../CloseButton/CloseButton";

export default function SetText(props) {
  function keyDownHandler(e) {
    if (e.keyCode === 27) {
      close();
    }
  }

  function close() {
    props.textAreaChangeHandler("");
    setTimeout(() => {
      props.setTextButtonHandler();
    }, 10);
  }

  function onChangeHandler(e) {
    props.textAreaChangeHandler(e.target.value);
  }

  return (
    <div className="SetText" onKeyDown={keyDownHandler}>
      <CloseButton close={close} />
      <button onClick={props.setTextButtonHandler}>Ok</button>
      <textarea autoFocus value={props.text} onChange={onChangeHandler} />
    </div>
  );
}
