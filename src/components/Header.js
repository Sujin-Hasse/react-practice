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

const WrapCategory = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 151px;
  height: 29px;
  margin: 0px 0px 0px 0px;
`;

const CategoryMovie = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 500;
  margin: 0px 0px 0px 24px;
  color: #727272;
`;
const CategoryTv = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 500;
  margin: 0px 0px 0px 24px;
  color: #727272;
`;
const CategoryBook = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  font-weight: 500;
  margin: 0px 0px 0px 24px;
  color: #727272;
`;
const CategoryWebtoon = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  margin: 0px 0px 0px 24px;
  color: #727272;
`;

const HeaderBlock = styled.div`
  margin: 0px 0px 0px 50px;
  width: 400px;
`;

export default Header;
