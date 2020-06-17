import React from "react";
import styled from "styled-components";

const Button = ({ width }) => (
  <ButtonElement >login</ButtonElement>
);

const ButtonElement = styled.button`
  border-radius: 5px;
  background-color: #efefef;
  border: none;
  padding: 6px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export default Button;
