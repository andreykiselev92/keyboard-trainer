import React from "react";
import "./SetText.css";
import CloseButton from "../CloseButton/CloseButton";

const SetText = (props) => {
  const keyDownHandler = e => {
    if (e.keyCode === 27) {
      close();
    }
  };

  const close = () => {
    props.textAreaChangeHandler("");
    setTimeout(() => {
      props.setTextButtonHandler();
    }, 10);
  };

  const onChangeHandler = e => {
    props.textAreaChangeHandler(e.target.value);
  };

  return (
    <div className="setText" onKeyDown={keyDownHandler}>
      <CloseButton close={close} />
      <button onClick={props.setTextButtonHandler}>Ok</button>
      <textarea autoFocus value={props.text} onChange={onChangeHandler} />
    </div>
  );
}

export default SetText;
