import React from "react";
import { arrEngKeys, arrRuKeys } from "./keyboardData";

import Arm from "../Arm/Arm";

export const getArrayOfButtonsElements = lang => {
  return lang ? [...arrEngKeys] : [...arrRuKeys];
};

export const isShiftActive = (character, keyValue) => {
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
};

export const getKeyValue = (array, value) => {
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
};

export const getClasses = ({ isActive, keyValue, side, finger, fillColor }) => {
  let classNamesArray = ["keyItem"];
  classNamesArray.push(getFunctionalButtonClassName(keyValue));
  if (isActive) {
    classNamesArray.push("active");
  }

  if (fillColor) {
    classNamesArray.push(getFilledItemClass({ side, finger }));
  }

  if (
    keyValue === "а" ||
    keyValue === "о" ||
    keyValue === "f" ||
    keyValue === "j"
  ) {
    classNamesArray.push("markItem");
  }

  return classNamesArray;
};

export const getInnerContent = data => {
  if (Array.isArray(data)) {
    return (
      <React.Fragment>
        <span>{data[0]}</span>
        <span>{data[1]}</span>
      </React.Fragment>
    );
  } else {
    return <span>{data}</span>;
  }
};

export const getFilledItemClass = ({ side, finger }) => {
  let name = `key-${
    side === "l" ? "left" : side === "lr" ? "colorSpace" : "right"
  }-${finger}`;

  return name;
};

export const getFunctionalButtonClassName = data => {
  if (typeof data === "string") {
    switch (data) {
      case "Backspace":
        return `key-${data}`;
      case "Tab":
        return `key-${data}`;
      case "Caps Lock":
        return "key-CapsLock";
      case "Enter":
        return `key-${data}`;
      case "Shift":
        return `key-${data}`;
      case "Space":
        return `key-${data}`;
      default:
        return "key-default";
    }
  } else {
    return "key-default";
  }
};

export const getArmComponent = ({
  side,
  finger,
  isActive,
  shiftSideActive,
  spaceSide,
  keyValue
}) => {
  if (keyValue === "Space" && spaceSide) {
    return <Arm finger={finger} side={spaceSide || side} />;
  } else if (isActive || shiftSideActive) {
    return <Arm finger={finger} side={side} />;
  } else {
    return null;
  }
};
