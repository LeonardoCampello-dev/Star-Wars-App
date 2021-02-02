import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      starships: [],
    };
  }

  async fetchPeople() {
    let response = await fetch("https://swapi.dev/api/people/?format=json");
    const data = await response.json();

    if (data.results) this.setState({ people: data.results });
  }

  async fetchPlanets() {
    let response = await fetch("https://swapi.dev/api/planets/?format=json");
    const data = await response.json();
    this.setState({ planets: data.results });
  }

  async fetchStarships() {
    let response = await fetch("https://swapi.dev/api/starships/?format=json");
    const data = await response.json();
    this.setState({ starships: data.results });
  }

  async componentDidMount() {
    await this.fetchPeople();
    await this.fetchPlanets();
    await this.fetchStarships();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/people">
              <People data={this.state.people} />
            </Route>
            <Route exact path="/planets">
              <Planets data={this.state.planets} />
            </Route>
            <Route exact path="/starships">
              <Starships data={this.state.starships} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
