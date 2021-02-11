import React, { Component, Fragment } from "react";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";

import { Name, Population, Diameter, Climate, Terrain } from "./PlanetCard";

import NextOrPrevButton from "../Buttons/NextOrPrevButton";
import { ButtonsContainer } from "../Buttons/ButtonsContainer";

import diameterIconSVG from "./diameter.svg";

class Planets extends Component {
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
            <p>{error}</p>
          ) : (
            results.map((planet, index) => {
              const { name, population, diameter, climate, terrain } = planet;

              return (
                <Card
                  boxShadowColor="#2FBC1B"
                  gridTemplateRows="3.6rem 6rem 5.2rem 6rem 8rem"
                  cardHeight="32rem"
                  key={index}
                >
                  <Name>{name}</Name>

                  {population === "unknown" ? (
                    <Population>Population: Unknown</Population>
                  ) : (
                    <Population>Population: {population}</Population>
                  )}

                  <Diameter>
                    <img src={diameterIconSVG} alt="Diameter" />
                    {diameter}km
                  </Diameter>

                  <Climate climate={climate}>
                    Climate: {climate.replace(", ", " and ")}
                  </Climate>

                  <Terrain>
                    <h4>Terrain</h4>

                    <p>{terrain}</p>
                  </Terrain>
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

export default Planets;
