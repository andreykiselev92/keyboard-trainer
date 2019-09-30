import React from "react";

import {
  getInnerContent,
  getClasses,
  getArmComponent
} from "./keyboardFunctionAssistants";

const KeyItem = ({
  finger,
  fillColor,
  keyValue,
  side,
  isActive,
  shiftSide,
  spaceSide,
  showHands
}) => {
  const inner = getInnerContent(keyValue);

  const shiftSideActive =
    shiftSide === side && keyValue === "Shift" ? true : false;

  const classNamesArray = getClasses({
    isActive,
    keyValue,
    side,
    finger,
    fillColor
  });

  return (
    <div className={classNamesArray.join(" ")}>
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
};

export default KeyItem;
