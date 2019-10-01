import React from "react";
import "./SelectLanguage.css";
import CloseButton from "../CloseButton/CloseButton";

const SelectLanguage = (props) => {
  const handleRadioChange = (e) => {
    setTimeout(props.close, 100);

    props.selectLanguageHandler(e.target.value);
  }

  const data = props.dataLanguages.map(elem => {
    return (
      <p key={elem.id}>
        <input
          name="SelectLanguage"
          type="radio"
          value={elem.value}
          id={`${elem.value}Radio`}
          checked={props.value === elem.value}
          onChange={handleRadioChange}
          data-value={elem.labelValue}
        />
        <label htmlFor={`${elem.value}Radio`}>{elem.labelValue}</label>
      </p>
    );
  });
  return (
    <div className="selectLanguage">
      <CloseButton close={props.close} />
      {data}
    </div>
  );
}

export default SelectLanguage;
