import "./App.css";
import styled from "styled-components";
import Main from "./page/Main";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle.js";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    setClick(true);
  };

  return (
    <WrapMain>
      <GlobalStyle />
      <Header click={handleLogin} />
      <Main />
      {click && <Modal click={setClick} />}
    </WrapMain>
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
