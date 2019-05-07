import React from "react";
import "./KeyItem.css";
import Arm from "./Arm/Arm";

export default function KeyItem({
  finger,
  fillColor,
  keyValue,
  side,
  isActive,
  shiftSide,
  spaceSide,
  showHands
}) {
  const inner = getInnerContent(keyValue);
  let filledItemClassName = null;
  let functionalButtonClassName = getFunctionalButtonClassName(keyValue);

  const activeStyle = { background: "rgb(204, 204, 204)" };
  const shiftSideActive =
    shiftSide === side && keyValue === "Shift" ? true : false;

  if (fillColor) {
    filledItemClassName = getFilledItemClass({ side, finger });
  }

  return (
    <div
      className={`KeyItem ${filledItemClassName} ${functionalButtonClassName}`}
      style={
        showHands
          ? isActive
            ? activeStyle
            : shiftSideActive
            ? activeStyle
            : null
          : null
      }
    >
      {inner}
      {showHands
        ? getArmComponent({
            side,
            finger,
            shiftSideActive,
            spaceSide,
            isActive,
            keyValue
          })
        : null}
    </div>
  );
}

function getTypeOfData(data) {
  if (Array.isArray(data)) {
    return "array";
  } else if (typeof data === "string") {
    return "string";
  }
}

function getInnerContent(data) {
  if (getTypeOfData(data) === "array") {
    return (
      <React.Fragment>
        <span>{data[0]}</span>
        <span>{data[1]}</span>
      </React.Fragment>
    );
  } else {
    return <span>{data}</span>;
  }
}

function getFilledItemClass({ side, finger }) {
  let name = `key-${
    side === "l" ? "left" : side === "lr" ? "colorSpace" : "right"
  }-${finger}`;

  return name;
}

function getFunctionalButtonClassName(value) {
  if (getTypeOfData(value) === "string") {
    switch (value) {
      case "Backspace":
        return `key-${value}`;
      case "Tab":
        return `key-${value}`;
      case "Caps Lock":
        return "key-CapsLock";
      case "Enter":
        return `key-${value}`;
      case "Shift":
        return `key-${value}`;
      case "Space":
        return `key-${value}`;
      default:
        return "key-default";
    }
  } else {
    return "key-default";
  }
}

function getArmComponent({
  side,
  finger,
  isActive,
  shiftSideActive,
  spaceSide,
  keyValue
}) {
  if (keyValue === "Space" && spaceSide) {
    return <Arm finger={finger} side={spaceSide} />;
  } else if (isActive || shiftSideActive) {
    return <Arm finger={finger} side={side} />;
  } else {
    return null;
  }
}
