import React from "react";
import styled from "styled-components";

const Icon = ({ src }) => <IconImg src={src} />;

const IconImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
`;

export default Icon;
