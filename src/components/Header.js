import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import logo from "../assets/image/icon_logo.png";
import Modal from "../components/Modal";
import { useState } from "react";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal(true);
  }; // 2.openModal은 Modal의 state를 true로 상태전환,함수형태로 써야 함
  const closeModal = () => {
    setLoginModal(false);
  }; //2-1.closeModal은 Modal의 state를 false로 상태전환,함수형태로 써야 함

  return (
    <>
      <GlobalStyle />

      <WrapHeader>
        <WrapCategory>
          <Logo src={logo} />
          <CategoryMovie>영화</CategoryMovie>
          <CategoryTv>TV</CategoryTv>
          <CategoryBook>책</CategoryBook>
          <CategoryWebtoon>웹툰</CategoryWebtoon>
        </WrapCategory>
        <HeaderBlock />
        <WrapBackHeader>
          <SearchInput placeholder="🔍 콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
          <HeaderLoginButton onClick={openModal}>로그인</HeaderLoginButton>
          <SignUpButton>회원가입</SignUpButton>
        </WrapBackHeader>
      </WrapHeader>
    </>
  );
};

const WrapHeader = styled.div`
  display: flex;
  margin: 15px 0px 15px 30px;
  justify-content: center;
`;

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

const WrapBackHeader = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  background-color: RGB(245, 245, 247);
  border: none;
  margin: 0px 0px 0px 0px;
  width: 250px;

  ::placeholder {
    color: RGB(131, 131, 138);
    font-size: 13px;
    padding: 10px;
    font-weight: 550;
    letter-spacing: -1px;
  }
`;

const HeaderLoginButton = styled.button`
  border: none;
  background: none;
  color: #74747b;
  margin: 0px 0px 0px 24px;
`;

const SignUpButton = styled.button`
  background: none;
  color: #353535;
  font-weight: 600;
  text-align: center;
  border-radius: 6px;
  padding: 5px 14px 6px;
  margin: 0px 0px 0px 24px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  font-size: 14px;
`;

export default Header;
