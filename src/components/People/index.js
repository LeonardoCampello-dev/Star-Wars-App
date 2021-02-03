import React, { Component } from "react";

import { CardSection } from "../../styles/CardSection";
import { Card } from "../../styles/Card";

import { Name, WeightAndHeight, HairAndSkin, Gender } from "./PeopleCard";

import maleIconSVG from "./male.svg";
import femaleIconSVG from "./female.svg";
import robotIconSVG from "./robot.svg";

class People extends Component {
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

  render() {
    return (
      <CardSection>
        {this.props.data.map((person, index) => {
          const { name, mass, height, hair_color, skin_color, gender } = person;

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
            </Card>
          );
        })}
      </CardSection>
    );
  }
}

export default People;
