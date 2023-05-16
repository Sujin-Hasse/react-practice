<<<<<<< HEAD
import React from "react";

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
=======
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
>>>>>>> parent of 10f0112 (feat: 모달 컴포넌트 분리)
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
