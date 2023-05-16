import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import kakaoLogin from "../assets/image/icon_kakao.png";
import googleLogin from "../assets/image/icon_google.png";
import twitterLogin from "../assets/image/icon_twitter.png";
import lineLogin from "../assets/image/icon_line.png";

{
  /* {loginModal && <WrapModal />} */
}

const Modal = () => {
  return (
    <>
      <CloseButton>&times;</CloseButton>
      {/* 3.true가 된 loginModal 가져오기*/}
      <Modal>
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
        </Background>
      </Modal>
    </>
  );
};

const CloseButton = styled.button`
  //백그라운드를 누르면 닫히는 걸로 구현해보기
  display: flex;
  width: 10px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #696969;
  background-color: transparent;
  cursor: pointer;
  border: white;
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

export default Modal;
