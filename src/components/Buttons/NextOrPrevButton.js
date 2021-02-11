import React, { Component } from "react";

import leftArrowIconSVG from "./left-arrow.svg";
import rightArrowIconSVG from "./right-arrow.svg";

import { ArrowButton } from "./ArrowButton";

class NextOrPrevButton extends Component {
  constructor(props) {
    super(props);
  }

  switchToPreviousOrNextButton(option) {
    if (option === "previous") {
      return (
        <ArrowButton onClick={this.props.handleClick}>
          <img src={leftArrowIconSVG} alt="Previous" />
        </ArrowButton>
      );
    } else if (option === "next") {
      return (
        <ArrowButton onClick={this.props.handleClick}>
          <img src={rightArrowIconSVG} alt="Next" />
        </ArrowButton>
      );
    }
  }

  render() {
    return this.switchToPreviousOrNextButton(this.props.buttonOption);
  }
}

export default NextOrPrevButton;
