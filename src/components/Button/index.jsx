import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  border: none;
  border-radius: 3px;
  padding: 0.5rem;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    font-size: 1rem;
    font-weight: 400;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 400;
  }
  @media (min-width: 1024px) {
    font-size: 1.4rem;
    font-weight: 400;
  }
  @media (min-width: 1330px) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export default Button;
