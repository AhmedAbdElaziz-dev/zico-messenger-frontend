import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from '../LandingPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} />;
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
