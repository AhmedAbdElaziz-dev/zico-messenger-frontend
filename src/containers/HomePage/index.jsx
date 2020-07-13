import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { iconsList, navList, messeges } from "./constants";
import Header from "../../components/Header";
import Chat from "../../components/Chat";
import Icon from "../../components/Icon";
import Button from "../../components/Button";
import Messege from "../../components/Messege";
import { connect } from "react-redux";
import {
  conversationList as getconversationList,
  getAllMessges,
} from "../../redux-modules/messege/action";

const HomePage = (props) => {
  const [conversationsList, setConversationsList] = useState([]);
  useEffect(() => {
    props.getConversationsList();
  }, []);
  const [messegeBody, setMessegeBody] = useState("");
  // const [messegesList, setMessegesList] = useState([]);
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   props.getConversationsList(userId);
  //   setConversationsList(this.props.conversationList);
  // }, []);
  //   props.getMessegesList(reciverId);
  //   setMessegesList(props.messegesList);
  // };
  const inputHandler = (event) => {
    const { value } = event.target;
    const newMessegeBody = value;
    setMessegeBody(newMessegeBody);
  };
  const buttonHandler = (event) => {
    event.preventDefault();
    const messege = props.sendMessege(messegeBody);
  };
  return (
    <Container>
      <Header iconsList={iconsList} navList={navList} />
      <ChatSection>
        <ChatList>
          {props.conversationList.map((conversation) => (
            <Chat
              imgSrc={conversation.imgSrc}
              userName={conversation.userName}
              messege={conversation.messeges}
              messegesHandler={props.getAllMessges}
            />
          ))}
        </ChatList>
        <MessegeSection>
          <MessegeList>
            {props.messeges.map((messege) => (
              <Messege
                text={messege.text}
                imgSrc={messege.imgSrc}
                id={messege.id}
              ></Messege>
            ))}
          </MessegeList>
          <MessegeFooter>
            <Icon color={"none"} fontColor={"gray"} icon={"fas fa-paperclip"} />
            <TextMessege onChange={inputHandler}></TextMessege>
            <Button backgroundColor={"none"} fontColor={"#339AF0"}>
              Send
            </Button>
          </MessegeFooter>
        </MessegeSection>
      </ChatSection>
    </Container>
  );
};

const TextMessege = styled.input`
  width: 70%;
  margin: 0rem 0.3rem;
  border-radius: 8px;
  border: 1px solid #f2eeee;
  background-color: white;
`;

const ChatList = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  border: 1px solid #f2eeee;
  @media (max-width: 950px) {
    width: 27%;
  }
  @media (max-width: 650px) {
    width: 35%;
  }
  @media (max-width: 450px) {
    width: 60%;
  }
`;

const MessegeList = styled.div`
  background-color: #f2eeee;
  flex-grow: 1;
`;

const MessegeFooter = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const MessegeSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ChatSection = styled.div`
  display: flex;
  flex-grow: 1;
  // height:100%;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = (state) => {
  return {
    conversationList: state.messege.conversationList,
    messeges: state.messege.messeges,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessege: () => dispatch(),
    getConversationsList: () => dispatch(getconversationList()),
    getAllMessges: () => dispatch(getAllMessges()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
