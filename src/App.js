import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Legal from "./Legal.js";
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/legal" component={() => <Legal />} />
        </Switch>
      </div>
    );
  }
}

export default App;
