import React from "react";
import styled from "styled-components";

const CheckBox = ({ text }) => (
  <CheckboxContainer>
    <CheckBoxField type="checkbox" />
    <label>{text} </label>
  </CheckboxContainer>
);

const CheckBoxField = styled.input`
  width: 0.5rem;
  /ding: 0rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

export default CheckBox;
