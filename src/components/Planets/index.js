import React, { Component } from "react";

class Planets extends Component {
  render() {
    return (
      <div className="planets">
        <p>Planets</p>

        {this.props.data.map((planet, index) => {
          return (
            <div className="card">
              <div>{planet.name}</div>
              <div>{planet.population}</div>

              <div>{planet.diameter}</div>
              <div>{planet.climate}</div>
              <div>{planet.terrain}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Planets;
