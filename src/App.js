import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loader from "react-loader-spinner";

import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Header from "./components/Header";

import GlobalStyles from "./styles/GlobalStyles";
import Container from "./styles/Container";

import { LoaderContainer } from "./styles/LoaderContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      starships: [],
      isLoading: true,
    };
  }

  checkFetchErrors(callResults) {
    const fetchFunctionIndex = callResults.findIndex(
      (results) => results.status === "rejected"
    );

    const errorMessage =
      "We had a problem searching for data. Please, come back later!";

    switch (fetchFunctionIndex) {
      case 0:
        return this.setState({
          people: {
            error: errorMessage,
          },
        });
      case 1:
        return this.setState({
          planets: {
            error: errorMessage,
          },
        });
      case 2:
        return this.setState({
          starships: {
            error: errorMessage,
          },
        });
      default:
        break;
    }
  }

  async fetchPeople() {
    let response = await fetch("https://swapi.dev/api/people/?format=json");
    const data = await response.json();

    if (data.results) this.setState({ people: data.results });
  }

  async fetchPlanets() {
    let response = await fetch("https://swapi.dev/api/planets/?format=json");
    const data = await response.json();

    if (data.results) this.setState({ planets: data.results });
  }

  async fetchStarships() {
    let response = await fetch("https://swapi.dev/api/starships/?format=json");
    const data = await response.json();

    if (data.results) this.setState({ starships: data.results });
  }

  async fetchAllData() {
    try {
      const fetchPromises = [
        this.fetchPeople(),
        this.fetchPlanets(),
        this.fetchStarships(),
      ];

      await Promise.allSettled(fetchPromises).then((results) =>
        this.checkFetchErrors(results)
      );

      this.setState({ isLoading: false });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    await this.fetchAllData();
  }

  render() {
    return (
      <Container>
        <Router>
          <Header />

          {this.state.isLoading ? (
            <LoaderContainer>
              <Loader type="Circles" color="#2FBC1B" height={70} width={70} />
            </LoaderContainer>
          ) : (
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
          )}
        </Router>

        <GlobalStyles />
      </Container>
    );
  }
}

export default App;
