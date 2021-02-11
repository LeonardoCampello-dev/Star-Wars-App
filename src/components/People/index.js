import React, { Component, Fragment } from "react";

import { format, parseISO } from "date-fns";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";

import {
  Name,
  WeightAndHeight,
  HairAndSkin,
  Gender,
  Created,
} from "./PeopleCard";

import NextOrPrevButton from "../Buttons/NextOrPrevButton";
import { ButtonsContainer } from "../Buttons/ButtonsContainer";

import maleIconSVG from "./male.svg";
import femaleIconSVG from "./female.svg";
import robotIconSVG from "./robot.svg";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }

  checkGender(gender) {
    switch (gender) {
      case "n/a":
        return <img src={robotIconSVG} alt="Robot" />;
      case "male":
        return <img src={maleIconSVG} alt="Male" />;
      case "female":
        return <img src={femaleIconSVG} alt="Female" />;
      default:
        return null;
    }
  }

  formatDate(date) {
    const newDate = parseISO(date);

    const formattedDate = format(newDate, "dd/MM/yyyy");

    return formattedDate;
  }

  async fetchPreviousOrNextData(dataURL) {
    let response = await fetch(dataURL);
    const data = await response.json();

    if (data) this.setState(data);
  }

  render() {
    const { results, error, previous, next } = this.state;

    return (
      <Fragment>
        <CardSection>
          {error ? (
            <p>{error}</p>
          ) : (
            results.map((person, index) => {
              const {
                name,
                mass,
                height,
                hair_color,
                skin_color,
                gender,
                created,
              } = person;

              return (
                <Card
                  boxShadowColor="var(--yellow-color)"
                  gridTemplateRows="repeat(4, 1fr)"
                  key={index}
                >
                  <Name>{name}</Name>

                  <WeightAndHeight>
                    <div>{mass}kg</div>
                    <div>{height}cm</div>
                  </WeightAndHeight>

                  <HairAndSkin>
                    <div className="hair-color">
                      {hair_color === "n/a" || hair_color === "none"
                        ? null
                        : `Hair color: ${hair_color}`}
                    </div>

                    <div className="skin-color">Skin color: {skin_color}</div>
                  </HairAndSkin>

                  <Gender>{this.checkGender(gender)}</Gender>
                  <Created>Created on: {this.formatDate(created)}</Created>
                </Card>
              );
            })
          )}
        </CardSection>

        <ButtonsContainer>
          {previous ? (
            <NextOrPrevButton
              handleClick={() => this.fetchPreviousOrNextData(previous)}
              buttonOption="previous"
            />
          ) : null}

          {next ? (
            <NextOrPrevButton
              handleClick={() => this.fetchPreviousOrNextData(next)}
              buttonOption="next"
            />
          ) : null}
        </ButtonsContainer>
      </Fragment>
    );
  }
}

export default People;
