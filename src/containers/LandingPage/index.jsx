import React, { Component } from "react";
import Form from "../../components/Form";

class LandingPage extends Component {
  state = {
    buttonList: [
      {
        text: "login",
      },
      { text: "register" },
    ],
    inputList: [
      {
        type: "text",
        label: "userName",
        value: "",
      },
      {
        type: "password",
        label: "password",
        value: "",
      },
      {
        type: "date",
        label: "birthday",
        value: "",
      },
    ],
  };

  render() {
    return (
      <Form
        formWidth={"20rem"}
        inputWidth={""}
        formHeader={"LOGIN"}
        inputList={this.state.inputList}
        buttonList={this.state.buttonList}
      />
    );
  }
}

export default LandingPage;
