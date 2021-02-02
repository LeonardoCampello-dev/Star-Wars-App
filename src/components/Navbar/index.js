import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1>Star Wars App</h1>
        </Link>

        <div className="links">
          <Link to="/people">
            <li>People</li>
          </Link>

          <Link to="/planets">
            <li>Planets</li>
          </Link>

          <Link to="/starships">
            <li>Starship</li>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
