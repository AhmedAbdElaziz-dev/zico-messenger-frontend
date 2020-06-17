import React from "react";
import styled from "styled-components";

const Tab = ({ name }) => <TabElement>{name}</TabElement>;

const TabElement = styled.li`
  font-size: 0.6rem;
  color: black;
  font-weight: 700;
  text-decoration: none;
  margin-right: 2rem;
  transition: all 0.5s ease 0s;
  &:hover {
    color: #0088a9;
    font-weight: blod;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export default Tab;
