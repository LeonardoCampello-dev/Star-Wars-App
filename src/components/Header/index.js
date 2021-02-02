import React, { Component } from "react";

import { Link } from "react-router-dom";

import { HeaderLogo } from "./styles";
import lightsaberIcon from "./lightsaber.svg";

class Header extends Component {
  render() {
    return (
      <HeaderLogo>
        <Link to="/">
          <h1 className="title">
            Star Wars App
            <span>
              <img src={lightsaberIcon} alt="Lightsaber" />
            </span>
          </h1>
        </Link>
      </HeaderLogo>
    );
  }
}

export default Header;
