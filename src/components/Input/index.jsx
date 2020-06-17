import React from "react";
import styled from "styled-components";

const Input = ({ type, palceholder, label }) => (
  <InputContainer>
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
  border: 2px solid #efefef;
  border-radius: 20px;
  box-sizing: border-box;
  margin-left: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem 0rem;
`;

export default Input;
