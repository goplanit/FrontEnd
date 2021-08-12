import React from "react";
import styled from "styled-components";

//component
import Header from "../shared/Header";
import Profile from "../components/MyTrip/Profile";
import GoTrip from "../components/MyTrip/GoTrip";
import WentTrip from "../components/MyTrip/WentTrip";

function MyTrip(props) {
  return (
    <Container>
      <Header {...props} />
      <MyTripWrap>
        <Profile />
        <WentTrip />
      </MyTripWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const MyTripWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 140px;
`;

export default MyTrip;
