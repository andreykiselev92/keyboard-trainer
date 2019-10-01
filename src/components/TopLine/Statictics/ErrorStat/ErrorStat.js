import React from "react";
import "./ErrorStat.css";

const ErrorStat = (props) => {
  return (
    <div className="errorStat" title="Errors">
      {props.errorStat}%
    </div>
  );
}

export default ErrorStat;
