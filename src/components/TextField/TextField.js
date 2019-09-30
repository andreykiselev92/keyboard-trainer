import React, { Component } from "react";
import Preloader from "../Preloader/Preloader";
import "./TextField.css";
import ActiveTextField from "./ActiveTextField/ActiveTextField";

export default class TextField extends Component {
  getTextFieldItems = () => {
    const textArr = this.props.text;

    if (textArr && textArr.length > 0) {
      return textArr.map((stringElem, i) => {
        if (i === 0) {
          return (
            <ActiveTextField
              index={this.props.index}
              key={stringElem.id + performance.now()}
              string={stringElem.text}
            />
          );
        }

        return (
          <div
            className="textFieldItem"
            key={stringElem.id + performance.now()}
          >
            {stringElem.text}
          </div>
        );
      });
    } else {
      return <Preloader />;
    }
  };

  render() {
    const text = this.getTextFieldItems();
    return <div className="textField">{text}</div>;
  }
}
