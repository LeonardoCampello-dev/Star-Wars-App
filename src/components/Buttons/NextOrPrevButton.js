import React, { Component } from "react";

import leftArrowIconSVG from "./left-arrow.svg";
import rightArrowIconSVG from "./right-arrow.svg";

import { ArrowButton } from "./ArrowButton";

class NextOrPrevButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOption: this.props.buttonOption,
      handleClick: this.props.handleClick,
    };
  }

  switchToPreviousOrNextButton(option) {
    if (option === "previous") {
      return (
        <ArrowButton onClick={this.state.handleClick}>
          <img src={leftArrowIconSVG} alt="Previous" />
        </ArrowButton>
      );
    } else if (option === "next") {
      return (
        <ArrowButton onClick={this.state.handleClick}>
          <img src={rightArrowIconSVG} alt="Next" />
        </ArrowButton>
      );
    }
  }

  render() {
    return this.switchToPreviousOrNextButton(this.state.buttonOption);
  }
}

export default NextOrPrevButton;
