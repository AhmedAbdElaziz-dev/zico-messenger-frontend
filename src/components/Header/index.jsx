import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import NavBar from "../Navbar";

const Header = ({ navList, iconsList }) => (
  <HeaderContainer>
    <IconContainer>
      {iconsList.map((item) => (
        <Icon color={item.color} fontColor={item.fontColor} icon={item.icon} />
      ))}
      <input type="text" />
    </IconContainer>
    <h1 style={{ margin: "0rem", padding: "0.2rem" }}>Messesges</h1>
    <NavBar list={navList} />
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  algin-items: center;
  width: 100%;
  border-bottom: 1px solid #f2eeee;
  padding: 0.3rem;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  display: flex;
`;

export default Header;
