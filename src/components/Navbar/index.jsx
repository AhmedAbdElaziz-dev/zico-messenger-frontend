import React from "react";
import styled from "styled-components";

const NavBar = () => (
  <React.Fragment>
    <NavBarContainer>
      <Item>Log Out</Item>
      <Item>Profile</Item>
    </NavBarContainer>
  </React.Fragment>
);

const NavBarContainer = styled.ul`
  display: flex;
  margin: 0rem;
`;

const Item = styled.li`
  font-weight: 500;
  font-size: 0.9rem;
  list-style: none;
  color: gray;
  padding: 0.5rem;
`;

export default NavBar;
