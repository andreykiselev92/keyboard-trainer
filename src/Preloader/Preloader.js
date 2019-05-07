import React from "react";
import "./Preloader.css"

export default function Preloader() {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-rolling">
        <div />
      </div>
    </div>
  );
}
