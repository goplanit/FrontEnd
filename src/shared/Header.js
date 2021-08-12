import React, { useCallback, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

//components
import LoginModal from "../components/LoginModalForm";
import User_module from "../redux/modules/User_module";

//shared
import { getCookie } from "../shared/cookie";

function Header(props) {
  const is_login = getCookie("is_login") ? true : false;

  const is_close = useRef();
  const { history } = props;
  const [loginModal, setLoginModal] = useState(false);

  const onClickOutside = useCallback((e) => {
    if (
      loginModal &&
      (!is_close.current || !is_close.current.contains(e.target))
    ) {
      setLoginModal(false);
    }
  });

  useEffect(() => {
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  });

  if (is_login === true) {
    return (
      <>
        <HeaderLayout bgColor={bgColor} id="header-layout">
          <Container>
            <HeaderLogo
              page={props.page}
              onClick={() => {
                history.push("/");
              }}
            >
              내일 어디가?
            </HeaderLogo>
            <HeaderMenu page={props.page}>
              <HeaderMenuItem>
                <div></div>
                <span>Home</span>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <div></div>
                <span>Explore</span>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <div></div>

                <span
                  onClick={() => {
                    document.location.href = "/mytrip";
                  }}
                >
                  My trip
                </span>

                {loginModal && <LoginModal ref={is_close} />}
              </HeaderMenuItem>
            </HeaderMenu>
          </Container>
        </HeaderLayout>
      </>
    );
  } else {
    return (
      <>
        <HeaderLayout bgColor={bgColor} id="header-layout">
          <Container>
            <HeaderLogo
              page={props.page}
              onClick={() => {
                history.push("/");
              }}
            >
              내일 어디가?
            </HeaderLogo>
            <HeaderMenu page={props.page}>
              <HeaderMenuItem>
                <div></div>
                <span>Home</span>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <div></div>
                <span>Explore</span>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <div></div>

                <span
                  onClick={() => {
                    setLoginModal(true);
                  }}
                >
                  Login
                </span>

                {loginModal && <LoginModal ref={is_close} />}
              </HeaderMenuItem>
            </HeaderMenu>
          </Container>
        </HeaderLayout>
      </>
    );
  }
}
const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 84px;
  z-index: 99;
  ${(props) => (props.bgColor ? "background-color: #909090;" : "")}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 69%;
  margin: 0 auto;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 26px;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: inline;
  }
`;

const HeaderLogo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => (props.page === "main" ? "#1dc6d1" : "#000")};
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 8vh;
    margin-left: 5vw;
  }
`;

const HeaderMenu = styled.ul`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.page === "main" ? "#fff" : "#000")};

  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 83px;
    background-color: #fff;
    color: #000;
  }
`;

const HeaderMenuItem = styled.li`
  width: 33%;
  text-align: center;
  font-size: 22px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #1dc6d1;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    & div {
      width: 30px;
      height: 28px;
      background-color: #c4c4c4;
      margin: 5px auto 5px;
    }
  }
`;

export default Header;
