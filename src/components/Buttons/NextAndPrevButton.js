import React, { Component } from "react";

import { ButtonsContainer } from "./ButtonsContainer";

import leftArrowIconSVG from "./left-arrow.svg";
import rightArrowIconSVG from "./right-arrow.svg";

class NextAndPrevButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonsContainer>
        {this.props.prev ? (
          <img src={leftArrowIconSVG} alt="Left arrow" />
        ) : null}

        {this.props.next ? (
          <img src={rightArrowIconSVG} alt="Right arrow" />
        ) : null}
      </ButtonsContainer>
    );
  }
}

export default NextAndPrevButtons;
