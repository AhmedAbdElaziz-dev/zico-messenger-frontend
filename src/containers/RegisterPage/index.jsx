import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { buttonList, inputList } from "./constants";
import Form from "../../components/Form";

const RegisterPage = (props) => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    email: "",
    imgSrc: "img3.webp",
    phoneNumber: "",
  });

  const imageUplaod = async (event) => {
    const image = event.target.file[0];
    const formData = new FormData();
    formData.set("image", image);
    const imgSrc = await props.uploadImage(formData);
    setUserInfo({ ...userInfo, imgSrc });
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    const user = { [name]: value };
    setUserInfo({ ...userInfo, ...user });
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    await props.register(userInfo);
    if (props.islogged) props.history.push("/home");
  };
  buttonList.find(
    (item) => item.id === "register"
  ).buttonHandler = registerHandler;

  return (
    <Container>
      <RegisterContainer>
        <ImageContainer>
          <Image src={userInfo.imgSrc}></Image>
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            onChange={imageUplaod}
          ></input>
          <label htmlFor="image" className="fas fa-edit"></label>
        </ImageContainer>
        <Form
          type={"login"}
          formWidth={"30rem"}
          inputWidth={""}
          formHeader={"Register"}
          inputList={inputList}
          inputHandler={inputHandler}
          buttonList={buttonList}
          iconsList={[]}
          loginHandler={registerHandler}
        />
      </RegisterContainer>
    </Container>
  );
};

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
  border: none;
  flex-grow: 1;
`;

const RegisterContainer = styled.div`
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

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: () => dispatch(),
  };
};

const mapStateToProps = (state) => {
  return {
    // islogged: state.userStatus.islogged,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
