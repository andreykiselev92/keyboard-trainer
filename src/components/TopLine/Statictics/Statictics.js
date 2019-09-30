import React, { Component } from "react";
import "./Statictics.css";
import SpeedStat from "./SpeedStat/SpeedStat";
import ErrorStat from "./ErrorStat/ErrorStat";

export default class Statistics extends Component {
  state = {
    timeStart: 0,
    lastTime: 0,
    lastSpeed: 0,
    length: 0
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.inputText && props.value === "") {
      if (state.timeStart) {
        const lastTime = performance.now() - state.timeStart;
        const lastSpeed = Math.floor(((state.length - 1) * 60000) / lastTime);
        return {
          lastTime,
          lastSpeed,
          timeStart: 0
        };
      }
    } else if (props.inputText && !state.timeStart) {
      return {
        timeStart: performance.now(),
        length: props.length
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lastSpeed !== this.state.lastSpeed) {
      let lang = "eng";

      if (!prevProps.engLang) {
        lang = "ru";
      }

      const { lastSpeed } = this.state;

      const max = this.getMax(lastSpeed, lang);

      if (max === lastSpeed) {
        prevProps.newAchievement({ lastSpeed, lang });
      }
    }
  }

  getMax = (speed, lang) => {
    let progress = [];

    if (Array.isArray(this.props.progress[lang])) {
      progress = this.props.progress[lang].map(elem => {
        return elem.achievement;
      });
    }

    progress.push(speed);

    let max = Math.max.apply(null, [...progress]);

    return max;
  };

  render() {
    return (
      <div className="statictics">
        <SpeedStat
          lastTime={this.state.lastTime}
          lastSpeed={this.state.lastSpeed}
        />
        <ErrorStat errorStat={this.props.errorStat} />
      </div>
    );
  }
}
