import Modal from "../components/Modal";
import Header from "../components/Header";
import styled from "styled-components";
import Ranking from "../components/Ranking";

import { Routes, Route } from "react-router-dom";
import Movie from "../components/Movie";
import MoviePage from "../components/MoviePage";

import logo from "../assets/image/icon_logo.png";
import kakaoLogin from "../assets/image/icon_kakao.png";
import googleLogin from "../assets/image/icon_google.png";
import twitterLogin from "../assets/image/icon_twitter.png";
import lineLogin from "../assets/image/icon_line.png";
import { useState } from "react";
import { DATA } from "../assets/Data";

const Main = () => {
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal(true);
  }; // 2.openModal은 Modal의 state를 true로 상태전환,함수형태로 써야 함
  const closeModal = () => {
    setLoginModal(false);
  }; //2-1.closeModal은 Modal의 state를 false로 상태전환,함수형태로 써야 함
  const temp = {
    rank: 1,
    // img: poster1,
    title: "가디언즈 오브 갤럭시: Volume 3",
    year: "2023",
    country: "미국",
    average: "4.1",
    percent: "37%",
    audience: "370000",
    originalTitle: "Guardians of the Galaxy Vol. 3",
    genre: "액션/모험/코미디/SF",
    runningTime: "2시간 30분",
    age: "12세 관람가",
    description:
      "'가모라'를 잃고 슬픔에 빠져 있던 '피터 퀼'이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기",
  };

  return (
    <>
      {/*1.로그인버튼을 누르면 openModal 실행*/}
      <WrapHeader>
        <Header />
        <WrapBackHeader>
          <SearchInput placeholder="🔍 콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
          <HeaderLoginButton onClick={openModal}>로그인</HeaderLoginButton>
          <SignUpButton>회원가입</SignUpButton>
        </WrapBackHeader>
      </WrapHeader>

      <Routes>
        <Route path="/" element={<Ranking data={DATA} />} />
        <Route path="/main/:rank" element={<MoviePage />} />
      </Routes>

      {/* <Ranking data={DATA} /> */}
      {/* 3.true가 된 loginModal 가져오기*/}
      <Modal open={loginModal} close={closeModal}>
        {/* 여기는 수진이가 만든 모달 styled-components */}
        <Background>
          <WrapModal>
            <WrapLogo>
              <Logo src={logo} />
            </WrapLogo>
            <LoginText>로그인</LoginText>

            <WrapInput>
              <IdInput placeholder="이메일" />
              <PasswordInput placeholder="비밀번호" />
            </WrapInput>

            <LoginButton>로그인</LoginButton>
            <CheckPassword>비밀번호를 잊어버리셨나요?</CheckPassword>
            <MakeAccount>
              계정이 없으신가요? <MakeAccountButton>회원가입</MakeAccountButton>
            </MakeAccount>
            <WrapLine>
              <Line />
              <LineText>OR</LineText>
              <BackLine />
            </WrapLine>

            <SocialLoginList>
              <KakaoLogin src={kakaoLogin} />
              <GoogleLogin src={googleLogin} />
              <TwitterLogin src={twitterLogin} />
              <LineLogin src={lineLogin} />
            </SocialLoginList>

            <LoginTip>
              TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
              사용해요.
            </LoginTip>
          </WrapModal>
          {/* {loginModal && <WrapModal />} */}
        </Background>
      </Modal>
    </>
  );
};

const WrapHeader = styled.div`
  display: flex;
  margin: 15px 0px 15px 30px;
  justify-content: center;
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

const Background = styled.div`
  display: flex;
`;

const WrapModal = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 375px;
  height: 634px;
  font-family: inherit;
  //background-color: blue;
`;

const WrapLogo = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  justify-content: center;
  width: 198px;
  height: 38.02px;
`;

const LoginText = styled.h2`
  font-size: 17px;
  letter-spacing: -0.5px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  margin: 24px 0px 20px;
`;

const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdInput = styled.input`
  align-items: center;
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  border: none;
  height: 44px;
  margin: 4px 0px 4px 0px;
  padding: 0px 12px 0px 12px;
  border-radius: 6px;
`;

const PasswordInput = styled.input`
  align-items: center;
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  border: none;
  height: 44px;
  margin: 4px 0px 4px 0px;
  padding: 0px 12px 0px 12px;
  border-radius: 6px;
`;

const LoginButton = styled.button`
  background-color: #ff2f6e;
  border: none;
  border-radius: 6px;
  height: 44px;
  color: white;
  font-size: 17px;
  letter-spacing: -0.5px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0px 20px 0px;
`;

const CheckPassword = styled.button`
  background: none;
  border: none;
  color: #ff2f6e;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 14px;
`;

const MakeAccount = styled.div`
  text-align: center;
  color: #8c8c8c;
  font-size: 15px;
  font-weight: 400;
`;

const MakeAccountButton = styled.button`
  background: none;
  border: none;
  color: #ff2f6e;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 14px;
`;

const WrapLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0px 24px 0px;
`;

const Line = styled.div`
  border: 0.5px solid gray;
  width: 200px;
  height: 1px;
`;

const LineText = styled.div`
  margin: 0px 5px 0px 5px;
  color: gray;
`;

const BackLine = styled.div`
  border: 0.5px solid gray;
  width: 200px;
  height: 1px;
`;

const SocialLoginList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const KakaoLogin = styled.img``;
const GoogleLogin = styled.img``;
const TwitterLogin = styled.img``;
const LineLogin = styled.img``;

const LoginTip = styled.div`
  margin-top: 48px;
  background-color: #f7f7f7;
  color: #8c8c8c;
  font-size: 15px;
  font-weight: 400;
  padding: 10px 13px 10px 13px;
`;

export default Main;
