import React, { Component } from "react";

class Starships extends Component {
  render() {
    return (
      <div className="starships">
        <p>Starships</p>

        {this.props.data.map((starship, index) => {
          return (
            <div className="card">
              <div>{starship.starship_class}</div>

              <div>{starship.name}</div>
              <div>{starship.model}</div>

              <div>{starship.manufacturer}</div>

              <div>{starship.max_atmosphering_speed}</div>
              <div>{starship.crew}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Starships;
