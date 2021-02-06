import React, { Component } from "react";

import { ButtonsContainer } from "./ButtonsContainer";

import leftArrowIconSVG from "./left-arrow.svg";
import rightArrowIconSVG from "./right-arrow.svg";

class NextAndPrevButtons extends Component {
  render() {
    return (
      <ButtonsContainer>
        <img src={leftArrowIconSVG} alt="Left arrow" />
        <img src={rightArrowIconSVG} alt="Right arrow" />
      </ButtonsContainer>
    );
  }
}

export default NextAndPrevButtons;
