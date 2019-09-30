import React, { Component } from "react";
import "./SetLanguage.css";
import SelectLanguage from "./SelectLanguage/SelectLanguage";
import SetText from "./SetText/SetText";

export default class SetLanguage extends Component {
  state = {
    menuVisibility: false,
    setText: false,
    value: "eng",
    dataLanguages: [
      {
        id: 1,
        value: "eng",
        labelValue: "English (qwerty)"
      },
      {
        id: 2,
        value: "ru",
        labelValue: "Русский (йцукен)"
      },
      {
        id: 3,
        value: "myEng",
        labelValue: "My Text (English)"
      },
      {
        id: 4,
        value: "myRu",
        labelValue: "Мой Текст (Русский)"
      },
      {
        id: 5,
        value: "engNum",
        labelValue: "Numline"
      },
      {
        id: 6,
        value: "ruNum",
        labelValue: "Цифровой ряд"
      }
    ],
    text: ""
  };

  changeHandler = e => {
    this.props.changeLanguage(e.target.value);
  };

  chkboxSelectLanguageHandler = () => {
    this.setState(prevState => {
      return {
        menuVisibility: !prevState.menuVisibility
      };
    });
  };

  selectLanguageHandler = value => {
    this.setState({
      value
    });

    if (value === "myEng" || value === "myRu") {
      this.setState({
        setText: true
      });
      return;
    }

    this.props.changeLanguage(value);
  };

  setTextButtonHandler = () => {
    const text = this.state.text;
    let value = this.state.value;
    if (text === "") {
      value = value.slice(2).toLowerCase();
    }
    setTimeout(() => {
      this.setState({
        setText: false,
        text: "",
        value
      });
    }, 50);

    this.props.changeLanguage(this.state.value, text);
  };

  textAreaChangeHandler = value => {
    this.setState({
      text: value
    });
  };

  render() {
    const labelValue = this.state.dataLanguages.filter(elem => {
      return elem.value === this.state.value;
    })[0].labelValue;
    return (
      <div className="setLanguage">
        <input
          type="checkbox"
          value={this.state.menuVisibility}
          id="chkboxSelectLanguage"
          onChange={this.chkboxSelectLanguageHandler}
        />
        <label htmlFor="chkboxSelectLanguage">{labelValue}</label>
        {this.state.menuVisibility ? (
          <SelectLanguage
            close={this.chkboxSelectLanguageHandler}
            dataLanguages={this.state.dataLanguages}
            selectLanguageHandler={this.selectLanguageHandler}
            value={this.state.value}
          />
        ) : null}

        {this.state.setText ? (
          <SetText
            text={this.state.text}
            textAreaChangeHandler={this.textAreaChangeHandler}
            setTextButtonHandler={this.setTextButtonHandler}
          />
        ) : null}
      </div>
    );
  }
}
