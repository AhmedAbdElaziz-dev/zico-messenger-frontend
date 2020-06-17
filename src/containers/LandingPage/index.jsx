import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

class LandingPage extends Component {
  render() {
    return (
      <Contianer>
        <Header />
        <Form />
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

export default LandingPage;
