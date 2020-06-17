import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../../components/Button";

const Form = () => (
  <FormContainer>
    <FormInputs>
      <Input type={"text"} palceholder={"Enter your name"} label={"username"} />
      <Input
        type={"text"}
        palceholder={"Enrer you password"}
        label={"password"}
      />
    </FormInputs>
    <FormButtons>
      <Button  />
    </FormButtons>
  </FormContainer>
);
const FormInputs = styled.div``;
const FormButtons = styled.div``;

const FormContainer = styled.form`
  margin: 3rem 0rem;
  padding: 3rem 1rem;
  display: flex;
  width: 10rem;;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  border: 2px solid #efefef;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export default Form;
