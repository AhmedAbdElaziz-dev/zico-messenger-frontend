import styled from "styled-components";
import React from "react";

const Input = ({ icon, inputHandler, palceHolder, name,ariaInvalid,ref }) => {
  return (
    <InputContainer>
      <i className={icon} />
      <InputField
        placeholder={palceHolder}
        onChange={inputHandler}
        name={name}
        aria-invalid={ariaInvalid}
        ref={ref}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid gray;
`;

const InputField = styled.input`
  font-size: 0.6rem;
  text-align: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
    // &:focus {
    //   width: 230px;
    // }
  }
  @media (min-width: 1330px) {
    font-size: 1.2rem;
    // &:focus {
    //   width: 270px;
    // }
  }
`;

export default Input;
