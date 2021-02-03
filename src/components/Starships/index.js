import React, { Component } from "react";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";

import {
  StarshipClass,
  Name,
  Model,
  Manufacturer,
  MaxSpeed,
  Crew,
} from "./StarshipCard";

import classIconSVG from "./tag.svg";
import speedIconSVG from "./speed.svg";
import crewIconSVG from "./crew.svg";

class Starships extends Component {
  render() {
    return (
      <CardSection>
        {this.props.data.map((starship, index) => {
          return (
            <Card
              boxShadowColor="#E60C0C"
              gridTemplateRows="6rem 7rem 8rem 5rem 5rem"
              cardHeight="35rem"
            >
              <StarshipClass>
                <img src={classIconSVG} alt="Starship class" />
                {starship.starship_class}
              </StarshipClass>

              <Name>{starship.name}</Name>
              <Model>
                <h4>Model</h4> {starship.model}
              </Model>

              <Manufacturer>
                <h4>Manufacturer</h4> {starship.manufacturer}
              </Manufacturer>

              {starship.max_atmosphering_speed !== "n/a" ? (
                <MaxSpeed>
                  <img src={speedIconSVG} alt="Max speed" />
                  {starship.max_atmosphering_speed.replace("km", "")}km
                </MaxSpeed>
              ) : (
                <MaxSpeed>
                  <img src={speedIconSVG} alt="Max speed" />
                  Unknown speed
                </MaxSpeed>
              )}

              <Crew>
                <img src={crewIconSVG} alt="crew" />
                Crew: {starship.crew}{" "}
                {starship.crew === "1" ? "person" : "people"}
              </Crew>
            </Card>
          );
        })}
      </CardSection>
    );
  }
}

export default Starships;
