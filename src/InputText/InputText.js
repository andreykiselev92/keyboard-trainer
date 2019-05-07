import React, { Component } from "react";
import "./InputText.css";

export default class InputText extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    if (e.target.value.length <= 76) {
      this.setNewValueAndCheck(e.target.value);
    }
  };

  handleKeyDown = e => {
    const autoBackspace = this.props.autoBackspace;

    if (autoBackspace) {
      if (e.keyCode === 8) {
        e.preventDefault();
      }
    }

    if (e.keyCode === 13) {
      this.addEnter(e.target.value);
    }
  };

  addEnter = value => {
    const newValue = value + "¶";

    this.setNewValueAndCheck(newValue);
  };

  setNewValueAndCheck = newValue => {
    this.setState({
      value: newValue
    });
    this.props.handleChange(newValue);
  };

  static getDerivedStateFromProps(props, state) {
    let newValue = "";

    if (props.value === "") {
      return {
        value: newValue
      };
    }

    if (props.backspace && props.autoBackspace) {
      const newValue = state.value.slice(0, state.value.length - 1);
      return {
        value: newValue
      };
    }

    return null;
  }

  render() {
    let className = ["InputText"];
    if (this.props.error) {
      className.push("error");
    }

    return (
      <input
        className={className.join(" ")}
        type="text"
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        value={this.state.value}
        autoFocus
      />
    );
  }
}
