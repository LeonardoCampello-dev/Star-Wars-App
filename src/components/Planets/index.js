import React, { Component } from "react";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";

import { Name, Population, Diameter, Climate, Terrain } from "./PlanetCard";

import NextAndPrevButton from "../Buttons/NextAndPrevButton";

import diameterIconSVG from "./diameter.svg";

class Planets extends Component {
  render() {
    const { data } = this.props;
    const { error } = this.props.data;

    return (
      <>
        <CardSection>
          {error ? (
            <p>{error}</p>
          ) : (
            data.map((planet, index) => {
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

        <NextAndPrevButton />
      </>
    );
  }
}

export default Planets;
