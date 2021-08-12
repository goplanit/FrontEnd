import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import barcord from "../../images/barcord.png";

function GoTrip(props) {
  return (
    <React.Fragment>
      <TravelForm>
        <TitleWrap>
          <Title>떠날 여행</Title>
          <SubTitle>Total 3</SubTitle>
        </TitleWrap>
        <ItineraryWrap>
          <TravelCardWrap>
            <TravelImage src="https://blog.hmgjournal.com/images_n/contents/180222_gyeongju01.png" />
            <JourneyWrap>
              <Journey>수원</Journey>
              <ArrowRightAltIcon fontSize="inherit" />
              <DirectionsCarIcon fontSize="inherit" />
              <ArrowRightAltIcon fontSize="inherit" />
              <Journey>속초</Journey>
            </JourneyWrap>
            <DepartureDateWrap>
              <DeapartureTitle>DEP</DeapartureTitle>
              <DeapartureDate>2021.08.14</DeapartureDate>
            </DepartureDateWrap>
            <BarcordWrap>
              <Barcord src={barcord} alt="barcord Image"></Barcord>
              <Line />
            </BarcordWrap>
            <BtnWrap>
              <TravelDone /* onClick={#} */>여행 완료</TravelDone>
            </BtnWrap>
          </TravelCardWrap>

          <TravelCardWrap>
            <TravelImage src="https://blog.hmgjournal.com/images_n/contents/180222_gyeongju01.png" />
            <JourneyWrap>
              <Journey>수원</Journey>
              <ArrowRightAltIcon fontSize="inherit" />
              <DirectionsCarIcon fontSize="inherit" />
              <ArrowRightAltIcon fontSize="inherit" />
              <Journey>속초</Journey>
            </JourneyWrap>
            <DepartureDateWrap>
              <DeapartureTitle>DEP</DeapartureTitle>
              <DeapartureDate>2021.08.14</DeapartureDate>
            </DepartureDateWrap>
            <BarcordWrap>
              <Barcord src={barcord} alt="barcord Image"></Barcord>
              <Line />
            </BarcordWrap>
            <BtnWrap>
              <TravelDone /* onClick={#} */>여행 완료</TravelDone>
            </BtnWrap>
          </TravelCardWrap>

          <TravelCardWrap>
            <TravelImage src="https://blog.hmgjournal.com/images_n/contents/180222_gyeongju01.png" />
            <JourneyWrap>
              <Journey>수원</Journey>
              <ArrowRightAltIcon fontSize="inherit" />
              <DirectionsCarIcon fontSize="inherit" />
              <ArrowRightAltIcon fontSize="inherit" />
              <Journey>속초</Journey>
            </JourneyWrap>
            <DepartureDateWrap>
              <DeapartureTitle>DEP</DeapartureTitle>
              <DeapartureDate>2021.08.14</DeapartureDate>
            </DepartureDateWrap>
            <BarcordWrap>
              <Barcord src={barcord} alt="barcord Image"></Barcord>
              <Line />
            </BarcordWrap>
            <BtnWrap>
              <TravelDone /* onClick={#} */>여행 완료</TravelDone>
            </BtnWrap>
          </TravelCardWrap>
        </ItineraryWrap>
      </TravelForm>
    </React.Fragment>
  );
}

const TravelForm = styled.div`
  width: 925px;
  height: 800px;
  display: flex;
  margin-left: 20px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 50px;
  /* margin: 50px 50px 15px 50px; */
  width: 200px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: -0.015em;
  color: #121212;
  margin-bottom: 15px;
`;
const SubTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.015em;
  color: #919191;
`;

const ItineraryWrap = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;
`;

const TravelCardWrap = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 2px solid lightgray;
  border-radius: 10px;
  margin: 10px 10px;
`;

const TravelImage = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0 0px;
`;
const JourneyWrap = styled.div`
  margin: 35px 35px 1px 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #919191;
  font-size: 22px;
`;
const Journey = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #121212;
`;

const DepartureDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 35px 35px 15px 35px;
`;
const DeapartureTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: -0.015em;
  color: #121212;
  margin-right: 15px;
`;
const DeapartureDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: -0.015em;
  color: #121212;
`;

const BarcordWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 35px;
`;

const Barcord = styled.img`
  height: 33px;
`;

const Line = styled.div`
  box-sizing: border-box;
  border: 1px dashed #e2e2e2;
  margin: 15px 0;
`;

const BtnWrap = styled.div`
  margin: 0 35px;
`;
const TravelDone = styled.button`
  width: 100%;
  height: 33px;
  font-weight: 600;
  border: 2px solid #1dc6d1;
  color: #1dc6d1;
  border-radius: 30px;
  font-size: 14px;
  margin-bottom: 17px;
`;

export default GoTrip;
