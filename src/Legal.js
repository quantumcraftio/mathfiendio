import React, { Component } from "react";

import translate from "./Translation";

import Header from "./Header.js";

import "./Legal.css";

class Legal extends Component {
  render() {
    return (
      <div>
        <Header lan={"en"} current="legal" />
        <div className="main-text">
          <h3>{translate("en", "legalTitle")}</h3>
          <div className="section">
            <h4>{translate("en", "legalSpec")}</h4>
            Quantum Craft UG (haftungsbeschränkt)<br />
            Gethsemanestr. 3<br />
            10437 Berlin<br />
          </div>

          <div className="section">
            <h4>{translate("en", "legalRepresented")}</h4>
            Niels Madan
          </div>

          <div className="section">
            <h4>{translate("en", "legalContact")}</h4>
            E-Mail: contact@quantumcraft.io
          </div>

          <div className="section">
            <h4>{translate("en", "legalRegisterEntry")}</h4>
            {translate("en", "legalRegisterLineOne")}
            <br />
            {translate("en", "legalRegisterLineTwo")}
            <br />
            {translate("en", "legalRegisterLineThree")}{" "}
          </div>

          <h3>{translate("en", "legalDisclaimer")}</h3>
          <div className="section">
            <h4>{translate("en", "legalContentTitle")}</h4>
            {translate("en", "legalContent")}
          </div>

          <div className="section">
            <h4>{translate("en", "legalLinksTitle")}</h4>
            {translate("en", "legalLinks")}
          </div>

          <div className="section">
            <h4>{translate("en", "legalCopyrightTitle")}</h4>
            {translate("en", "legalCopyright")}
          </div>
        </div>
      </div>
    );
  }
}

export default Legal;
