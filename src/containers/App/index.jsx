import React, { Component } from "react";
import TestPage from "../TestPage";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TestPage} />;
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
