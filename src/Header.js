import React, { Component } from "react";

import logo from "./app_logo.png";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <a href={"/" + (this.props.lan === "en" ? "" : this.props.lan + "/")}>
            <img className="logo" src={logo} alt="mathfiend logo." />
          </a>
        </div>
        <div className="button-row">
          <a href="./legal">
            <div className="header-button">{"Legal"}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
