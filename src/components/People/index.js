import React, { Component } from "react";

import { CardSection } from "../../styles/CardSection";

import {
  PeopleCard,
  Name,
  WeightAndHeight,
  HairAndSkin,
  Gender,
} from "./PeopleCard";

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
          return (
            <PeopleCard>
              <Name>{person.name}</Name>

              <WeightAndHeight>
                <div>{person.mass}kg</div>
                <div>{person.height}cm</div>
              </WeightAndHeight>

              <HairAndSkin>
                <div className="hair-color">
                  {person.hair_color === "n/a" || person.hair_color === "none"
                    ? null
                    : `Hair color: ${person.hair_color}`}
                </div>

                <div className="skin-color">
                  Skin color: {person.skin_color}
                </div>
              </HairAndSkin>

              <Gender>{this.checkGender(person.gender)}</Gender>
            </PeopleCard>
          );
        })}
      </CardSection>
    );
  }
}

export default People;
