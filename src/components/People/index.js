import React, { Component } from "react";

class People extends Component {
  render() {
    return (
      <div className="people">
        <p>People</p>

        {this.props.data.map((person, index) => {
          return (
            <div className="card">
              <div>{person.name}</div>

              <div>
                {person.height}
                {person.mass}
              </div>

              <div>
                {person.hair_color}
                {person.skin_color}
              </div>

              <div>{person.gender}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default People;
