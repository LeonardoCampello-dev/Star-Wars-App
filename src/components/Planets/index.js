import React, { Component } from "react";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";

import { Name, Population, Diameter, Climate, Terrain } from "./PlanetCard";

import diameterIconSVG from "./diameter.svg";

class Planets extends Component {
  render() {
    return (
      <CardSection>
        {this.props.data.map((planet, index) => {
          return (
            <Card
              boxShadowColor="#2FBC1B"
              gridTemplateRows="3.6rem 6rem 5.2rem 6rem 8rem"
              cardHeight="32rem"
            >
              <Name>{planet.name}</Name>

              {planet.population === "unknown" ? (
                <Population>Population: Unknown</Population>
              ) : (
                <Population>Population: {planet.population}</Population>
              )}

              <Diameter>
                <img src={diameterIconSVG} alt="Diameter" />
                {planet.diameter}km
              </Diameter>

              <Climate climate={planet.climate}>
                Climate: {planet.climate.replace(", ", " and ")}
              </Climate>

              <Terrain>
                <h4>Terrain</h4>

                <p>{planet.terrain}</p>
              </Terrain>
            </Card>
          );
        })}
      </CardSection>
    );
  }
}

export default Planets;
