import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";
import { Card } from "./Card";

import { background } from "./backgroundImages";

class Home extends Component {
  render() {
    return (
      <Container>
        <Link to="/people">
          <Card backgroundImage={background.people}>
            <h1>People</h1>
          </Card>
        </Link>

        <Link to="/planets">
          <Card backgroundImage={background.planets}>
            <h1>Planets</h1>
          </Card>
        </Link>

        <Link to="/starships">
          <Card backgroundImage={background.starships}>
            <h1>Starships</h1>
          </Card>
        </Link>
      </Container>
    );
  }
}

export default Home;
