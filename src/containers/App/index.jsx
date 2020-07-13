import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import RegisterPage from "../RegisterPage";

class App extends Component {
  render() {
    return (
      <Contianer>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LoginPage} />;
            <Route path="/home" component={HomePage} />;
            <Route path="/register" component={RegisterPage} />;
          </Switch>
        </BrowserRouter>
      </Contianer>
    );
  }
}

const Contianer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default App;
