import React from "react";
import { KAKAO_AUTH_URL, NAVER_AUTH_URL } from "../shared/OAuth";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/User_module";

import styled from "styled-components";
import naver from "../images/naver.png";
import kakao from "../images/kakao.png";
import email from "../images/email.png";
import login_close from "../images/login_close.png";

const LoginModal = (props) => {
  console.log(props);
  return (
    <Container>
      <FormWrap>
        <BtnWrap>
          <CloseBtn src={login_close} />
        </BtnWrap>
        <TitleWrap>
          <MainTitle>로그인</MainTitle>
        </TitleWrap>

        <BtnWrap>
          <LinkBtn
            className="kakaoBtn"
            onClick={() => {
              window.location.href = `${KAKAO_AUTH_URL}`;
            }}
          >
            <SocialLogo src={kakao} />
            <LogoText className="kakaoText">카카오 로그인</LogoText>
          </LinkBtn>
          <LinkBtn
            className="naverBtn"
            onClick={() => {
              window.location.href = `${NAVER_AUTH_URL}`;
            }}
          >
            <SocialLogo src={naver} />
            <LogoText>네이버 로그인</LogoText>
          </LinkBtn>
          <LinkBtn
            className="emailBtn"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            <SocialLogo className="Email" src={email} />
            <LogoText>이메일 로그인</LogoText>
          </LinkBtn>

          <FindPwWrap>
            <TextLink
            // onClick={() => {
            //   window.location.href = "/findpw";
            // }}
            >
              비밀번호 찾기
            </TextLink>
          </FindPwWrap>
        </BtnWrap>

        <LoginSignUpWrap>
          <p>아직 회원이 아니신가요?</p>
          <LoginSignUpBtn
            onClick={() => {
              window.location.href = "/join";
            }}
          >
            회원가입
          </LoginSignUpBtn>
        </LoginSignUpWrap>
      </FormWrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseBtn = styled.img`
  width: 24px;
  cursor: pointer;
  margin-top: -10px;
  /* transform: translate(-50%, -50%); */
  right: 30%;
  top: 25%;
`;

const FormWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  width: 550px;
  height: 650px;
  background-color: #fff;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TitleWrap = styled.section`
  display: inline-block;
  text-align: center;
  margin: -10px 0 15px 0;
`;

const MainTitle = styled.p`
  font-size: 35px;
  font-weight: 700;
  color: #121212;
`;

const BtnWrap = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 15px;
  :first-child {
    align-self: flex-end;
  }
`;

const LinkBtn = styled.a`
  width: 450px;
  height: 62px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px;
  cursor: pointer;
  &.kakaoBtn {
    background-color: #fee500;
  }
  &.naverBtn {
    background-color: #03c75a;
  }
  &.emailBtn {
    background-color: #1dc6d1;
  }
`;

const SocialLogo = styled.img`
  position: relative;
  margin-right: 20px;
  width: 22px;
  &.Email {
    width: 24px;
    margin-right: 20px;
  }
`;
const LogoText = styled.p`
  font-size: 21px;
  font-weight: 600;
  color: var(--white);
  &.kakaoText {
    color: #121212;
  }
`;

const FindPwWrap = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: #909090;
  background-color: transparent;
  border: none;
`;

const TextLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginSignUpWrap = styled.section`
  color: #909090;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const LoginSignUpBtn = styled.p`
  text-decoration: underline;
  color: #1dc6d1;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
`;

export default LoginModal;
