import "./App.css";
import Main from "./page/Main";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
