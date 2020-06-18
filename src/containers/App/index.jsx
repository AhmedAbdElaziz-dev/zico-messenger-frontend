import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import RegisterPage from "../../containers/RegisterPage";

class App extends Component {
  render() {
    return (
      <Contianer>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />;
            <Route path="/register" component={RegisterPage} />;
          </Switch>
        </BrowserRouter>
        <Footer />
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
