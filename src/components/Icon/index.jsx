import React from "react";
import styled from "styled-components";

const Icon = ({ src }) => <IconImg src={src} />;

const IconImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 2rem;
`;

export default Icon;
