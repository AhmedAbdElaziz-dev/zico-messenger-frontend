import React, { Component } from "react";
import Form from "../../components/Form";

class RegisterPage extends Component {
  state = {
    buttonList: [
      {
        text: "Sing up",
      },
      { text: "cancel" },
    ],
    inputList: [
      {
        type: "text",
        label: "userName",
        value: "",
      },
      {
        type: "e-mail",
        label: "E-mail",
        value: "",
      },
      {
        type: "password",
        label: "password",
        value: "",
      },
      {
        type: "password",
        label: "password",
        value: "",
      },
      {
        type: "text",
        label: "PhoneNumber",
        value: "",
      },
    ],
  };
  render() {
    return (
      <Form
        type={"register"}
        formWidth={"80%"}
        inputWidth={"50%"}
        formHeader={"REGISTER"}
        inputList={this.state.inputList}
        buttonList={this.state.buttonList}
      />
    );
  }
}

export default RegisterPage;
