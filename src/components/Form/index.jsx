import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../../components/Button";

const Form = ({
  formHeader,
  inputList,
  buttonList,
  formWidth,
  inputWidth,
  type,
}) => (
  <FormContainer formWidth={formWidth}>
    <FormHead>{formHeader}</FormHead>
    <FormInputs type={type}>
      {inputList.map((inputItem) => (
        <Input
          inputWidth={inputWidth}
          type={inputItem.type}
          label={inputItem.label}
        />
      ))}
    </FormInputs>
    <FormButtons>
      {buttonList.map((buttonItem) => (
        <Button text={buttonItem.text} />
      ))}
    </FormButtons>
  </FormContainer>
);
const FormInputs = styled.div`
  ${(props) =>
    props.type === "register" &&
    `
  width:100%;
  display:flex;
  flex-wrap:wrap;

  `}
`;
const FormButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const FormHead = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
`;
const FormContainer = styled.form`
  margin: 3rem 0rem;
  padding: 1rem;
  display: flex;
  width: ${(props) => props.formWidth};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  border: 2px solid #efefef;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export default Form;
