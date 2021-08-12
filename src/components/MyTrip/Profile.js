import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon from "@material-ui/icons/Create";

function Profile(props) {
  return (
    <React.Fragment>
      <ProfileForm>
        <UserPicForm>
          <AccountCircleIcon fontSize="inherit" color="inherit" />
        </UserPicForm>
        <NickNameForm>
          <NickName>닉네임</NickName>
          <CreateIcon fontSize="inherit" color="inherit" />
        </NickNameForm>
        <TravelHistoryWrap>
          <TravelCountWrap>
            <TravelCntForm>
              <TravelCnt>9</TravelCnt>
              <CntName>전체 여행</CntName>
            </TravelCntForm>
            <TravelCntForm>
              <TravelCnt>3</TravelCnt>
              <CntName>떠날 여행</CntName>
            </TravelCntForm>
            <TravelCntForm>
              <TravelCnt>6</TravelCnt>
              <CntName>지난 여행</CntName>
            </TravelCntForm>
          </TravelCountWrap>
          <Line />
          <HistoryWrap>
            <HistoryName className="goTrip" onClick={() => {}}>
              떠날 여행
            </HistoryName>
            <HistoryName className="wentTrip" onClick={() => {}}>
              지난 여행
            </HistoryName>
          </HistoryWrap>
          <Line />
          <HistoryName>로그 아웃</HistoryName>
        </TravelHistoryWrap>
      </ProfileForm>
    </React.Fragment>
  );
}

const ProfileForm = styled.div`
  width: 385px;
  height: 730px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const UserPicForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 200px;
  color: #c4c4c4;
`;

const NickNameForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #bbbbbb;
  font-size: 24px;
`;
const NickName = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.015em;
  color: black;
`;

const TravelHistoryWrap = styled.div`
  margin: 45px 60px 45px;
`;

const TravelCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const TravelCntForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const TravelCnt = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.015em;
`;
const CntName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #909090;
  margin-top: 10px;
`;
const Line = styled.div`
  box-sizing: border-box;
  border: 1.5px solid #f2f2f2;
  margin: 55px 0 50px 0;
`;

const HistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const HistoryName = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #bbbbbb;
  &.wentTrip {
    margin-top: 40px;
  }
  &:hover {
    color: #1dc6d1;
    cursor: pointer;
  }
`;

export default Profile;
