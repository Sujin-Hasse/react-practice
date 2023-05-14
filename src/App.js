import "./App.css";
import styled from "styled-components";
import Main from "./page/Main";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle.js";

function App() {
  return (
    <WrapMain>
      <GlobalStyle />
      <Header />
      <Main />
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
