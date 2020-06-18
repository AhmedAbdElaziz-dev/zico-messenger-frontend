import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Header = () => (
  <HeaderContainer>
    <Navbar></Navbar>;
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  width:100%;
  background-color:#EFEFEF;  
  display: flex;
  justify-content:center;
  align-items-center;
  padding:0.5rem;
  box-sizing:border-box;
`;

export default Header;
