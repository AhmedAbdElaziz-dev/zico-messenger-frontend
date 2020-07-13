import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import { buttonList, inputList, iconsList } from "./constants";
import { userLogin } from "../../redux-modules/user/action";
import { connect } from "react-redux";

const Login = (props) => {
  const [userInfo, setuserInfo] = useState({ userName: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    const user = { [name]: value };
    console.log(user);
    setuserInfo({ ...userInfo, ...user });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    const user = (await this.props.login(userInfo))
      ? props.history.push("/home")
      : "";
  };

  buttonList.find((item) => item.id === "login").buttonHandler = loginHandler;
  return (
    <Container>
      <LoginContainer>
        <ImageContainer>
          <Image src="image1.jpg" />
          <Link> create an account ?</Link>
        </ImageContainer>
        <FormContainer>
          <Form
            inputHandler={inputHandler}
            loginHandler={loginHandler}
            type={"login"}
            formWidth={"30rem"}
            inputWidth={""}
            formHeader={"Log In"}
            inputList={inputList}
            buttonList={buttonList}
            iconsList={iconsList}
          />
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

const Image = styled.img`
  width: 100%;
  border: none;
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  display: flex;
  margin: 2rem;
  background-color: white;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f2eeee;
`;

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(userLogin()),
  };
};

export default connect(mapDispatchToProps)(Login);
