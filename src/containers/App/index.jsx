import React, { Component } from "react";
import TestPage from "../TestPage";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return <Route path="/" component={TestPage} />;
  }
}

export default App;
