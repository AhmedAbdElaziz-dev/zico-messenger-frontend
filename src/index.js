import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux-modules/store";

const GlobalStyle = createGlobalStyle`
    ${Normalize}
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&display=swap');
    body{
        font-size:62.5%;
        font-family:"Montserrat",sans-serif;
    }
`;

const app = (
  <Provider store={store}>
    <GlobalStyle />
    <Normalize />
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
