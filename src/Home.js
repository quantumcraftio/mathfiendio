import React, { Component } from "react";

import firstScreenshot from "./screenshot_1.png";
import secondScreenshot from "./screenshot_2.png";
import thirdScreenshot from "./screenshot_3.png";

import Header from "./Header.js";

import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenshot: firstScreenshot,
    };
  }

  componentDidMount() {
    this.screenshotChanger = setInterval(this.changeScreenshot.bind(this), 2000);
  }

  changeScreenshot() {
    if (this.state.screenshot === firstScreenshot) {
      this.setState({
        screenshot: secondScreenshot,
      });
    } else if (this.state.screenshot === secondScreenshot) {
      this.setState({
        screenshot: thirdScreenshot,
      });
    } else if (this.state.screenshot === thirdScreenshot) {
      this.setState({
        screenshot: firstScreenshot,
      });
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="page">
          <div className="main-section">
            <img
              alt="mathfiend screenshots."
              className="screen-shot"
              src={this.state.screenshot}
            />
            <h1 className="title">mathfiend</h1>
            <h2 className="subtitle">Hurt your brain! With math!</h2>
            <a href="http://bit.ly/mathfiend-ios">
              <div className="btn">Download for iPhone</div>
            </a>
            <div className="android-disclaimer">Android coming soon!</div>
          </div>
          <div className="copyright">©2017-present Quantum Craft UG (haftungsbeschränkt)</div>
        </div>
      </div>
    );
  }
}

export default Home;
