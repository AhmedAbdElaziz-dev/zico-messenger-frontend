import React from "react";
import styled from "styled-components";

const Chat = ({ imgSrc, userName, messege, messegesHandler, reciverId }) => (
  <ChatContainer onClick={() => messegesHandler(reciverId)}>
    <ChatIcon src={imgSrc} />
    <ChatInfo>
      <User>{userName}</User>
      <Messege>{messege}</Messege>
    </ChatInfo>
  </ChatContainer>
);

const Messege = styled.div``;

const User = styled.div`
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

const ChatInfo = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ChatIcon = styled.img`
  width: 30px;
  border-radius: 50%;
  margin: 0.5rem;
`;

const ChatContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border-bottom: 1px solid #f2eeee;
`;

export default Chat;
