import React from "react";
import styled from "styled-components";

const Messege = ({ text, imgSrc }) => {
  return (
    <MessegeContainer>
      <MessegeIcon src={imgSrc} />
      <MessegeText>{text}</MessegeText>
    </MessegeContainer>
  );
};

const MessegeText = styled.div`
  border: 1px sloid black;
  background-color: #cfdbe1;
  padding: 0.5rem;
`;

const MessegeContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const MessegeIcon = styled.img`
  width: 35px;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 0.5rem;
`;
export default Messege;
