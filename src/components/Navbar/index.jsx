import React from "react";
import styled from "styled-components";
import Tab from "../Tab";
import Icon from "../Icon";

const Navbar = () => (
  <NavbarList>
    <Icon src={"image6.png"}/>
    <Tab name={"HOME"} />
    <Tab name={"ABOUT US"} />
    <Tab name={"FEATURES"} />
  </NavbarList>
);

const NavbarList = styled.ul`
  display: flex;
  justify-contnet: center;
  align-items: center;
  list-style: none;
  margin: 0px;
`;

export default Navbar;
