import React from "react";
import KeyItem from "./KeyItem";

const KeysRow = (props) => {
  const targetValue = props.targetValue;
  const listOfKeys = props.row.map(elem => {
    const isActive = targetValue === elem.keyValue ? true : false;
    return (
      <KeyItem
        key={elem.keyValue + elem.side + elem.finger}
        {...elem}
        {...props}
        isActive={isActive}
      />
    );
  });

  return <div className="keysRow">{listOfKeys}</div>;
}

export default KeysRow;
