import React, { Component, Fragment } from "react";
import "./Keyboard.css";
import {
  getArrayOfButtonsElements,
  isShiftActive,
  getKeyValue
} from "./keyboardFunctionAssistants";

import KeysRow from "./KeysRow";
import ButtonsOfKeyboard from "../ButtonsOfKeyboard/ButtonsOfKeyboard";

export default class Keyboard extends Component {
  state = {
    shiftSide: null,
    spaceSide: null,
    lastSide: null,
    targetValue: null,
    fillColor: true,
    showKeyboard: true,
    showHands: true
  };

  componentDidMount() {
    let fillColor = true;
    let showHands = true;
    let showKeyboard = true;

    if (localStorage.getItem("fillColor")) {
      fillColor = JSON.parse(localStorage.getItem("fillColor"));
    }

    if (localStorage.getItem("showHands")) {
      showHands = JSON.parse(localStorage.getItem("showHands"));
    }

    if (localStorage.getItem("showKeyboard")) {
      showKeyboard = JSON.parse(localStorage.getItem("showKeyboard"));
    }

    this.setState({
      fillColor,
      showHands,
      showKeyboard
    });
  }

  static getDerivedStateFromProps(props, state) {
    const character = props.character;

    const arrayOfButtonElements = getArrayOfButtonsElements(props.engLang);
    const targetObj = getKeyValue(arrayOfButtonElements, character);
    const targetValue = targetObj.keyValue;
    let lastSide = targetObj.side;
    let spaceSide = null;

    if (targetValue === "Space") {
      spaceSide = state.lastSide === "r" ? "l" : "r";
      lastSide = spaceSide;
    }

    const shift = isShiftActive(character, targetObj.keyValue);

    const shiftSide = shift
      ? targetObj.side === "l"
        ? "r"
        : targetObj.side === "r"
        ? "l"
        : null
      : null;

    return {
      shiftSide,
      lastSide,
      targetValue,
      spaceSide
    };
  }

  fillColorHandle = () => {
    this.setState(prevState => {
      localStorage.setItem("fillColor", !prevState.fillColor);
      return {
        fillColor: !prevState.fillColor
      };
    });
  };

  showKeyboardHandle = () => {
    this.setState(prevState => {
      localStorage.setItem("showKeyboard", !prevState.showKeyboard);
      return {
        showKeyboard: !prevState.showKeyboard
      };
    });
  };

  showHandsHandle = () => {
    this.setState(prevState => {
      localStorage.setItem("showHands", !prevState.showHands);
      return {
        showHands: !prevState.showHands
      };
    });
  };

  render() {
    const arrayOfButtonElements = getArrayOfButtonsElements(this.props.engLang);

    const keys = arrayOfButtonElements.map((elem, index) => {
      return (
        <KeysRow
          key={`line-${index}`}
          row={elem}
          fillColor={this.state.fillColor}
          targetValue={this.state.targetValue}
          shiftSide={this.state.shiftSide}
          spaceSide={this.state.spaceSide}
          showHands={this.state.showHands}
        />
      );
    });
    return (
      <Fragment>
        <ButtonsOfKeyboard
          fillColor={this.state.fillColor}
          fillColorHandle={this.fillColorHandle}
          showKeyboard={this.state.showKeyboard}
          showKeyboardHandle={this.showKeyboardHandle}
          showHands={this.state.showHands}
          showHandsHandle={this.showHandsHandle}
          autoBackspace={this.props.autoBackspace}
          autoBackspaceHandle={this.props.autoBackspaceHandle}
        />
        {this.state.showKeyboard ? (
          <div className="keyboard">{keys}</div>
        ) : null}
      </Fragment>
    );
  }
}
