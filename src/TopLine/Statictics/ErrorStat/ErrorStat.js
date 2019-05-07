import React from "react";
import "./ErrorStat.css";

export default function ErrorStat(props) {
  return (
    <div className="ErrorStat" title="Errors">
      {props.errorStat}%
    </div>
  );
}
