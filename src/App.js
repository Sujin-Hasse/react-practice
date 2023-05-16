import "./App.css";
import styled from "styled-components";
import Main from "./page/Main";
import Header from "./components/Header";
import Modal from "./components/Modal";
import GlobalStyle from "./GlobalStyle.js";
import { useState } from "react";

function App(openModal) {
  return (
    <>
      <WrapMain>
        <GlobalStyle />
        <Header openModal={lo} />
        <Main />
      </WrapMain>
    </>
  );
}

const WrapMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 70px;
`;

export default App;
