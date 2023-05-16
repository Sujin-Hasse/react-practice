import "./App.css";
import styled from "styled-components";
import Main from "./page/Main";
import Header from "./components/Header";
import Modal from "./components/Modal";
import GlobalStyle from "./GlobalStyle.js";

function App() {
  const [click, setClick] = useState(false);

  const handleLogin = () => {
    setClick(true);
  };

  console.log(handleLogin);
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
