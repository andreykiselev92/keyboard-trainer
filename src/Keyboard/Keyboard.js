import React, { Component, Fragment } from "react";
import "./Keyboard.css";
import KeysRow from "./KeysRow/KeysRow";
import ButtonsOfKeyboard from "./ButtonsOfKeyboard/ButtonsOfKeyboard";

const arrEngKeys = [
  [
    { keyValue: ["`", "~"], side: "l", finger: 5 },
    { keyValue: [1, "!"], side: "l", finger: 5 },
    { keyValue: [2, "@"], side: "l", finger: 4 },
    { keyValue: [3, "#"], side: "l", finger: 3 },
    { keyValue: [4, "$"], side: "l", finger: 2 },
    { keyValue: [5, "%"], side: "l", finger: 2 },
    { keyValue: [6, "^"], side: "r", finger: 2 },
    { keyValue: [7, "&"], side: "r", finger: 2 },
    { keyValue: [8, "*"], side: "r", finger: 3 },
    { keyValue: [9, "("], side: "r", finger: 4 },
    { keyValue: [0, ")"], side: "r", finger: 5 },
    { keyValue: ["-", "_"], side: "r", finger: 5 },
    { keyValue: ["=", "+"], side: "r", finger: 5 },
    { keyValue: "Backspace", side: "r", finger: 5 }
  ],
  [
    { keyValue: "Tab", side: "l", finger: 5 },
    { keyValue: "q", side: "l", finger: 5 },
    { keyValue: "w", side: "l", finger: 4 },
    { keyValue: "e", side: "l", finger: 3 },
    { keyValue: "r", side: "l", finger: 2 },
    { keyValue: "t", side: "l", finger: 2 },
    { keyValue: "y", side: "r", finger: 2 },
    { keyValue: "u", side: "r", finger: 2 },
    { keyValue: "i", side: "r", finger: 3 },
    { keyValue: "o", side: "r", finger: 4 },
    { keyValue: "p", side: "r", finger: 5 },
    { keyValue: ["[", "{"], side: "r", finger: 5 },
    { keyValue: ["]", "}"], side: "r", finger: 5 },
    { keyValue: ["\\", "|"], side: "r", finger: 5 }
  ],
  [
    { keyValue: "Caps Lock", side: "l", finger: 5 },
    { keyValue: "a", side: "l", finger: 5 },
    { keyValue: "s", side: "l", finger: 4 },
    { keyValue: "d", side: "l", finger: 3 },
    { keyValue: "f", side: "l", finger: 2 },
    { keyValue: "g", side: "l", finger: 2 },
    { keyValue: "h", side: "r", finger: 2 },
    { keyValue: "j", side: "r", finger: 2 },
    { keyValue: "k", side: "r", finger: 3 },
    { keyValue: "l", side: "r", finger: 4 },
    { keyValue: [";", ":"], side: "r", finger: 5 },
    { keyValue: ["'", '"'], side: "r", finger: 5 },
    { keyValue: "Enter", side: "r", finger: 5 }
  ],
  [
    { keyValue: "Shift", side: "l", finger: 5 },
    { keyValue: "z", side: "l", finger: 5 },
    { keyValue: "x", side: "l", finger: 4 },
    { keyValue: "c", side: "l", finger: 3 },
    { keyValue: "v", side: "l", finger: 2 },
    { keyValue: "b", side: "l", finger: 2 },
    { keyValue: "n", side: "r", finger: 2 },
    { keyValue: "m", side: "r", finger: 2 },
    { keyValue: [",", "<"], side: "r", finger: 3 },
    { keyValue: [".", ">"], side: "r", finger: 4 },
    { keyValue: ["/", "?"], side: "r", finger: 5 },
    { keyValue: "Shift", side: "r", finger: 5 }
  ],
  [{ keyValue: "Space", side: "lr", finger: 1 }]
];

const arrRuKeys = [
  [
    { keyValue: "ё", side: "l", finger: 5 },
    { keyValue: [1, "!"], side: "l", finger: 5 },
    { keyValue: [2, '"'], side: "l", finger: 4 },
    { keyValue: [3, "№"], side: "l", finger: 3 },
    { keyValue: [4, ";"], side: "l", finger: 2 },
    { keyValue: [5, "%"], side: "l", finger: 2 },
    { keyValue: [6, ":"], side: "r", finger: 2 },
    { keyValue: [7, "?"], side: "r", finger: 2 },
    { keyValue: [8, "*"], side: "r", finger: 3 },
    { keyValue: [9, "("], side: "r", finger: 4 },
    { keyValue: [0, ")"], side: "r", finger: 5 },
    { keyValue: ["-", "_"], side: "r", finger: 5 },
    { keyValue: ["=", "+"], side: "r", finger: 5 },
    { keyValue: "Backspace", side: "r", finger: 5 }
  ],
  [
    { keyValue: "Tab", side: "l", finger: 5 },
    { keyValue: "й", side: "l", finger: 5 },
    { keyValue: "ц", side: "l", finger: 4 },
    { keyValue: "у", side: "l", finger: 3 },
    { keyValue: "к", side: "l", finger: 2 },
    { keyValue: "е", side: "l", finger: 2 },
    { keyValue: "н", side: "r", finger: 2 },
    { keyValue: "г", side: "r", finger: 2 },
    { keyValue: "ш", side: "r", finger: 3 },
    { keyValue: "щ", side: "r", finger: 4 },
    { keyValue: "з", side: "r", finger: 5 },
    { keyValue: "х", side: "r", finger: 5 },
    { keyValue: "ъ", side: "r", finger: 5 },
    { keyValue: ["\\", "/"], side: "r", finger: 5 }
  ],
  [
    { keyValue: "Caps Lock", side: "l", finger: 5 },
    { keyValue: "ф", side: "l", finger: 5 },
    { keyValue: "ы", side: "l", finger: 4 },
    { keyValue: "в", side: "l", finger: 3 },
    { keyValue: "а", side: "l", finger: 2 },
    { keyValue: "п", side: "l", finger: 2 },
    { keyValue: "р", side: "r", finger: 2 },
    { keyValue: "о", side: "r", finger: 2 },
    { keyValue: "л", side: "r", finger: 3 },
    { keyValue: "д", side: "r", finger: 4 },
    { keyValue: "ж", side: "r", finger: 5 },
    { keyValue: "э", side: "r", finger: 5 },
    { keyValue: "Enter", side: "r", finger: 5 }
  ],
  [
    { keyValue: "Shift", side: "l", finger: 5 },
    { keyValue: "я", side: "l", finger: 5 },
    { keyValue: "ч", side: "l", finger: 4 },
    { keyValue: "с", side: "l", finger: 3 },
    { keyValue: "м", side: "l", finger: 2 },
    { keyValue: "и", side: "l", finger: 2 },
    { keyValue: "т", side: "r", finger: 2 },
    { keyValue: "ь", side: "r", finger: 2 },
    { keyValue: "б", side: "r", finger: 3 },
    { keyValue: "ю", side: "r", finger: 4 },
    { keyValue: [".", ","], side: "r", finger: 5 },
    { keyValue: "Shift", side: "r", finger: 5 }
  ],
  [{ keyValue: "Space", side: "lr", finger: 1 }]
];

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
          name={`line-${index}`}
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
          <div className="Keyboard">{keys}</div>
        ) : null}
      </Fragment>
    );
  }
}

function getArrayOfButtonsElements(lang) {
  return lang ? [...arrEngKeys] : [...arrRuKeys];
}

function isShiftActive(character, keyValue) {
  if (character === "" || character === null) {
    return false;
  }
  if (character.length === 1 && character.toLowerCase() !== character) {
    return true;
  } else if (Array.isArray(keyValue)) {
    if (keyValue.indexOf(character) === 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function getKeyValue(array, value) {
  if (value === "") {
    return {};
  }

  if (value.charCodeAt(0) === 32) {
    value = "Space";
  }

  if (value.charCodeAt(0) === 10) {
    value = "Enter";
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let keyValue = array[i][j].keyValue;
      if (Array.isArray(keyValue)) {
        let isEqual = false;
        for (let i = 0; i < keyValue.length; i++) {
          if (keyValue[i] + "" === value) {
            isEqual = true;
            break;
          }
        }
        if (isEqual) {
          return { ...array[i][j] };
        }
      } else if (keyValue.toLowerCase() === value.toLowerCase()) {
        return { ...array[i][j] };
      }
    }
  }
  return {};
}
