import React from "react";
import "./ErrorStat.css";

export default function ErrorStat(props) {
  return (
    <div className="errorStat" title="Errors">
      {props.errorStat}%
    </div>
  );
}
