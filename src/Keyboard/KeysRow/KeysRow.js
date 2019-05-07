import React from "react";
import "./KeysRow.css";
import KeyItem from "./KeyItem/KeyItem";

export default function KeysRow(props) {
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

  return <div className="KeysRow">{listOfKeys}</div>;
}
