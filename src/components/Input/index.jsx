import React from "react";
import styled from "styled-components";

const Input = ({ type, palceholder, label, inputWidth }) => (
  <InputContainer inputWidth={inputWidth}>
    <InputLabel>{label}</InputLabel>
    <InputElement type={type} palceholder={palceholder} />
  </InputContainer>
);

const InputLabel = styled.label`
  font-size: 0.5rem;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
const InputElement = styled.input`
  width: 60%;
  border: 2px solid #efefef;
  border-radius: 20px;
  box-sizing: border-box;
  margin-left: 1rem;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  width: ${(props) => props.inputWidth};
`;

export default Input;
