import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import kakaoLogin from "../assets/image/icon_kakao.png";
import googleLogin from "../assets/image/icon_google.png";
import twitterLogin from "../assets/image/icon_twitter.png";
import lineLogin from "../assets/image/icon_line.png";

const Modal = (props) => {
  return (
    <Background>
      <WrapModal>
        <Logo src={logo} />
        <LoginText>로그인</LoginText>

        <WrapInput>
          <IdInput></IdInput>
          <PasswordInput></PasswordInput>
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
          TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </LoginTip>
      </WrapModal>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
`;

const WrapModal = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 375px;
  height: 634px;
  background-color: blue;
`;

const Logo = styled.img`
  text-align: center;
  width: 375px;
  height: auto;
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
  //width: 100%;
  height: 44px;
  padding: 0px 12px;
  border-radius: 6px;
`;

const PasswordInput = styled.input`
  align-items: center;
  background: rgb(245, 245, 245);
  box-sizing: border-box;
  //width: 100%;
  height: 44px;
  padding: 0px 12px;
  border-radius: 6px;
`;

const LoginButton = styled.button`
  background-color: #ff2f6e;
`;

const CheckPassword = styled.button``;

const MakeAccount = styled.div``;

const MakeAccountButton = styled.button``;

const WrapLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  border: 1px solid gray;
  width: 200px;
  height: 1px;
`;

const LineText = styled.div``;

const BackLine = styled.div`
  border: 1px solid gray;
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

const LoginTip = styled.div``;

export default Modal;
