import React, { Component } from "react";
import "./App.css";
import { getEngNum } from "./texts/engNumLine";
import { getRuNum } from "./texts/ruNumLine";
import {getArrOfText} from "./getArrOfText";

import Keyboard from "./Keyboard/Keyboard";
import TextField from "./TextField/TextField";
import InputTextField from "./InputText/InputText";
import TopLine from "./TopLine/TopLine";
import Progress from "./Progress/Progress";

export default class App extends Component {
  state = {
    engLang: true,
    activeString: "",
    value: "",
    fullTextArr: null,
    threeStringElements: null,
    index: Math.floor(Math.random() * 9999),
    indexLetter: 0,
    error: false,
    autoBackspace: true,
    backspace: false,
    lengthOfErrorString: null,
    errorCount: 0,
    errorStat: 0,
    inputText: false,
    progress: {}
  };

  componentDidMount() {
    let autoBackspace = true;
    let progress = { ru: [], eng: [] };

    if (localStorage.getItem("autoBackspace")) {
      autoBackspace = JSON.parse(localStorage.getItem("autoBackspace"));
    }

    if (localStorage.getItem("progress")) {
      progress = JSON.parse(localStorage.getItem("progress"));
    }

    this.setState({
      autoBackspace,
      progress
    });

    this.initApp();
  }

  initApp = (text = "") => {
    setTimeout(() => {
      const index = this.state.index;
      const fullTextArr = getArrOfText(this.state.engLang, text);

      const threeStringElements = this.getThreeStringElements(
        index,
        fullTextArr
      );

      this.setState({
        fullTextArr,
        threeStringElements,
        value: "",
        indexLetter: 0,
        error: false
      });
    }, 10);
  };

  setActiveString = string => {
    this.setState({
      activeString: string
    });
  };

  getThreeStringElements = (index, arr = this.state.fullTextArr) => {
    if (Array.isArray(arr) && arr.length > 0) {
      let arrThreeStringsElements = [];

      for (let i = 0; i < 3; i++) {
        const length = arr.length;
        const newIndex = (index + i) % length;

        const stringElem = {
          text: arr[newIndex],
          id: arr[newIndex] + performance.now()
        };
        if (i === 0) {
          this.setActiveString(stringElem.text);
        }
        arrThreeStringsElements.push(stringElem);
      }

      return arrThreeStringsElements;
    }

    return null;
  };

  checkValue = str => {
    let value = str;
    let error = false;
    const activeString = this.state.activeString;

    const length = str.length;
    const partOfActiveString = activeString.slice(0, length);

    if (str === partOfActiveString) {
      if (length === activeString.length) {
        this.changeIndex();
        return;
      }
      this.setState({
        inputText: true,
        value,
        error,
        lengthOfErrorString: null,
        indexLetter: str.length,
        backspace: false
      });
    } else {
      error = true;
      this.setState(prevState => {
        let errorCount = prevState.errorCount;
        const { lengthOfErrorString } = prevState;
        const length = str.length;

        if (!prevState.lengthOfErrorString) {
          errorCount++;
        } else if (lengthOfErrorString <= length) {
          errorCount++;
        }

        return {
          inputText: true,
          error: true,
          backspace: true,
          lengthOfErrorString: str.length,
          value,
          errorCount
        };
      });
    }

    if (length === activeString.length && !error) {
      this.changeIndex();
    }
  };

  changeIndex = () => {
    let index = this.state.index + 1;

    const threeStringElements = this.getThreeStringElements(index);
    this.setState(prevState => {
      let errorStat =
        Math.round(
          (prevState.errorCount /
            prevState.threeStringElements[0].text.length) *
            10000
        ) / 100;

      return {
        inputText: false,
        index,
        threeStringElements,
        value: "",
        indexLetter: 0,
        error: false,
        errorCount: 0,
        errorStat
      };
    });
  };

  autoBackspaceHandle = () => {
    this.setState(prevState => {
      localStorage.setItem("autoBackspace", !prevState.autoBackspace);
      return {
        autoBackspace: !prevState.autoBackspace
      };
    });
  };

  changeLanguage = (value, text) => {
    if (value === "eng") {
      this.setState({
        engLang: true
      });
    } else if (value === "ru") {
      this.setState({
        engLang: false
      });
    } else if (value === "myEng") {
      this.changeLanguage("eng", text);
      return;
    } else if (value === "myRu") {
      this.changeLanguage("ru", text);
      return;
    } else if (value === "engNum") {
      this.changeLanguage("eng", getEngNum());
      return;
    } else if (value === "ruNum") {
      this.changeLanguage("ru", getRuNum());
      return;
    }

    this.initApp(text);
  };

  newAchievement = options => {
    this.setState(prevState => {
      const progress = { ...prevState.progress };

      const newAch = {
        achievement: options.lastSpeed,
        date: new Date()
      };

      progress[options.lang].push(newAch);

      localStorage.setItem("progress", JSON.stringify(progress));

      return {
        progress
      };
    });
  };

  deleteAchievement = (index, lang) => {
    this.setState(prevState => {
      let progress = { ...prevState.progress };

      progress[lang].splice(index, 1);

      localStorage.setItem("progress", JSON.stringify(progress));

      return {
        progress
      };
    });
  };

  render() {
    const index = this.state.indexLetter;
    const str = this.state.activeString;
    let character = str !== "" ? str[index] : "";
    if (this.state.error) {
      if (!this.state.autoBackspace) {
        character = "Backspace";
      }
    }

    return (
      <div className="App">
        <TopLine
          value={this.state.value}
          length={this.state.activeString.length}
          changeLanguage={this.changeLanguage}
          inputText={this.state.inputText}
          errorStat={this.state.errorStat}
          engLang={this.state.engLang}
          progress={this.state.progress}
          newAchievement={this.newAchievement}
        />
        <InputTextField
          handleChange={this.checkValue}
          error={this.state.error}
          value={this.state.value}
          autoBackspace={this.state.autoBackspace}
          backspace={this.state.backspace}
        />
        <TextField text={this.state.threeStringElements} index={index} />
        <Keyboard
          character={character}
          engLang={this.state.engLang}
          autoBackspaceHandle={this.autoBackspaceHandle}
          autoBackspace={this.state.autoBackspace}
        />

        <Progress
          progress={this.state.progress}
          deleteHandler={this.deleteAchievement}
        />
      </div>
    );
  }
}