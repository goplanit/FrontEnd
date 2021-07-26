import React from "react";
import styled from "styled-components";
// shared
import Header from "../shared/Header";
import Container from "../shared/Container";

// elements
import Button from "../elements/Button";

// css
import "../css/detail.scss";

function Detail(props) {
  return (
    <>
      <Header />
      <Container>
        <FirstBox>
          <About>
            About
            <div
              style={{
                fontSize: "15px",
                fontWeight: "normal",
                marginTop: "10px",
              }}
            >
              지붕 없는 박물관 경주. 경주는 그만큼 발길이 닿는 어느 곳이든 문화
              유적지를 만날 수 있는 곳이다. 밤이면 더 빛나는 안압지를 비롯해
              허허벌판에 자리를 굳건히 지키고 있는 첨성대. 뛰어난 건축미를
              자랑하는 불국사 석굴암까지 어느 하나 빼놓을 수 없다. 경주 여행의
              기록을 남기고 싶다면 스탬프 투어를 이용해보는 것도 좋다. 16곳의
              명소를 탐방할 때마다 찍히는 도장 모으는 재미가 쏠쏠하다. 모바일
              앱으로도 스탬프 투어 참여가 가능하다.
            </div>
          </About>
          <Degree></Degree>
        </FirstBox>
      </Container>
    </>
  );
}

const FirstBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  margin-top: 20%;
`;

const About = styled.div`
  width: 35%;
  height: 180px;
  margin: 20px 0 0 100px;
  font-size: 30px;
  font-weight: bolder;
  float: left;
`;

const Degree = styled.div`
  border: 1px solid black;
  width: 30%;
  float: right;
  height: 180px;
`;

export default Detail;
