import React, { Component } from "react";

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

import NextAndPrevButtons from "../Buttons/NextAndPrevButton";

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

  formatDate(date) {
    const newDate = parseISO(date);

    const formattedDate = format(newDate, "dd/MM/yyyy");

    return formattedDate;
  }

  render() {
    const { results, error, prev, next } = this.props.data;

    return (
      <>
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

        <NextAndPrevButtons prev={prev} next={next} />
      </>
    );
  }
}

export default People;
