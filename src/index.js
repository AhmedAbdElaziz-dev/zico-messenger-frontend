import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${Normalize}
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&display=swap');
    body{
        font-size:62.5%;
        font-family:"Montserrat",sans-serif;
    }
`;

const app = (
  <React.Fragment>
    <GlobalStyle />
    <Normalize />
    <App />
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById("root"));
