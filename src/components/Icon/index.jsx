import React from "react";
import styled from "styled-components";

const Icon = (props) => (
  <IconContainer color={props.color} fontColor={props.fontColor}>
    <i className={props.icon} style={{ fontSize: "1.2rem" }} />
  </IconContainer>
);

const IconContainer = styled.div`
  display: flex;
  color: ${(props) => props.fontColor};
  justify-content: center;
  algin-items: center;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export default Icon;
