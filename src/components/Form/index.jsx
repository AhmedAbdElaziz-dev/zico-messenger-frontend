import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../../components/Button";
import CheckBox from "../CheckBox";
import Icon from "../../components/Icon";
import { useForm } from "react-hook-form";

const Form = ({
  formHeader,
  inputList,
  buttonList,
  inputWidth,
  type,
  iconsList,
  inputHandler,
}) => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <FormContainer >
      <FormHead>{formHeader}</FormHead>
      <FormInputs type={type}>
        {inputList.map((inputItem) => (
          <React.Fragment>
            <Input
              inputWidth={inputWidth}
              type={inputItem.type}
              placeholder={inputItem.placeholder}
              icon={inputItem.icon}
              inputHandler={inputHandler}
              name={inputItem.name}
              ariaInvalid={errors.name ? "true" : "false"}
              ref={register({ required: true, maxLength: 30 })}
            />
            {errors.name && errors.name.type === "required" && (
              <span role="alert">This is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span role="alert">Max length exceeded</span>
            )}
          </React.Fragment>
        ))}
        {type === "login" ? <CheckBox text={"Remmeber me"} /> : {}}
      </FormInputs>
      <FormButtons>
        {buttonList.map((buttonItem) => (
          <Button
            backgroundColor={buttonItem.backgroundColor}
            fontColor={buttonItem.fontColor}
            onClick={buttonItem.buttonHandler}
          >
            {buttonItem.text}
          </Button>
        ))}
      </FormButtons>
      <IconsContainer>
        {iconsList.map((item) => (
          <Icon
            color={item.color}
            icon={item.icon}
            fontColor={item.fontColor}
          />
        ))}
      </IconsContainer>
    </FormContainer>
  );
};
const IconsContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
`;

const FormInputs = styled.div`
  margin: 2.5rem 0rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const FormButtons = styled.div`
  display: flex;
`;

const FormHead = styled.h1`
  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 1rem;
  }

  @media (min-width: 1024px) {
    margin: 1rem;
    font-size: 2.5rem;
  }
  @media (min-width: 1330px) {
    font-size: 3rem;
    margin: 1rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
`;

export default Form;
