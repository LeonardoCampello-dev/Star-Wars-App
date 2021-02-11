import React, { Component, Fragment } from "react";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";
import { ErrorMessage } from "../../styles/ErrorMessage";

import {
  StarshipClass,
  Name,
  Model,
  Manufacturer,
  MaxSpeed,
  Crew,
} from "./StarshipCard";

import NextOrPrevButton from "../Buttons/NextOrPrevButton";
import { ButtonsContainer } from "../Buttons/ButtonsContainer";

import classIconSVG from "./tag.svg";
import speedIconSVG from "./speed.svg";
import crewIconSVG from "./crew.svg";

class Starships extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
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
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            results.map((starship, index) => {
              const {
                starship_class,
                name,
                model,
                manufacturer,
                max_atmosphering_speed,
                crew,
              } = starship;

              return (
                <Card
                  boxShadowColor="#E60C0C"
                  gridTemplateRows="6rem 7rem 8rem 5rem 5rem"
                  cardHeight="35rem"
                  key={index}
                >
                  <StarshipClass>
                    <img src={classIconSVG} alt="Starship class" />
                    {starship_class}
                  </StarshipClass>

                  <Name>{name}</Name>
                  <Model>
                    <h4>Model</h4> {model}
                  </Model>

                  <Manufacturer>
                    <h4>Manufacturer</h4> {manufacturer}
                  </Manufacturer>

                  {max_atmosphering_speed !== "n/a" ? (
                    <MaxSpeed>
                      <img src={speedIconSVG} alt="Max speed" />
                      {max_atmosphering_speed.replace("km", "")}km
                    </MaxSpeed>
                  ) : (
                    <MaxSpeed>
                      <img src={speedIconSVG} alt="Max speed" />
                      Unknown speed
                    </MaxSpeed>
                  )}

                  <Crew>
                    <img src={crewIconSVG} alt="crew" />
                    Crew: {crew} {crew === "1" ? "person" : "people"}
                  </Crew>
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

export default Starships;
