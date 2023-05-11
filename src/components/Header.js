import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import logo from "../assets/image/icon_logo.png";

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <WrapCategory>
        <Logo src={logo} />
        <CategoryMovie>영화</CategoryMovie>
        <CategoryTv>TV</CategoryTv>
        <CategoryBook>책</CategoryBook>
        <CategoryWebtoon>웹툰</CategoryWebtoon>
      </WrapCategory>
      <HeaderBlock />
    </>
  );
};

const Logo = styled.img`
  width: 151px;
  height: 29px;
`;

const WrapCategory = styled.div`
  display: flex;
`;

const CategoryMovie = styled.button`
  border: none;
  background: none;
  font-size: 15px;
`;
const CategoryTv = styled.button`
  border: none;
  background: none;
  font-size: 15px;
`;
const CategoryBook = styled.button`
  border: none;
  background: none;
  font-size: 15px;
`;
const CategoryWebtoon = styled.button`
  border: none;
  background: none;
  font-size: 15px;
`;

const HeaderBlock = styled.div`
  margin: 0px 20px 0px 20px;
`;

export default Header;
