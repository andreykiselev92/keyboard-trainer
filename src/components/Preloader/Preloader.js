import React from "react";
import "./Preloader.css"

const Preloader = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-rolling">
        <div />
      </div>
    </div>
  );
}

export default Preloader;
