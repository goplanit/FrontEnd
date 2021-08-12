import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import barcord from "../../images/barcord.png";

function WentTrip(props) {
  return (
    <React.Fragment>
      <TravelForm>
        <TitleWrap>
          <Title>지난 여행</Title>
          <SubTitle>Total 6</SubTitle>
        </TitleWrap>
        <ItineraryWrap>
          <TravelCardWrap>
            <TicketHeadWrap>
              <TicketHead />
              <BarcordImg src={barcord} />
            </TicketHeadWrap>
            <TicketBodyWrap>
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
              <BtnWrap>
                <ReviewBtn>리뷰 작성</ReviewBtn>
              </BtnWrap>
            </TicketBodyWrap>
          </TravelCardWrap>

          <TravelCardWrap>
            <TicketHeadWrap>
              <TicketHead />
              <BarcordImg src={barcord} />
            </TicketHeadWrap>
            <TicketBodyWrap>
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
              <BtnWrap>
                <ReviewBtn>리뷰 작성</ReviewBtn>
              </BtnWrap>
            </TicketBodyWrap>
          </TravelCardWrap>

          <TravelCardWrap>
            <TicketHeadWrap>
              <TicketHead />
              <BarcordImg src={barcord} />
            </TicketHeadWrap>
            <TicketBodyWrap>
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
              <BtnWrap>
                <ReviewBtn>리뷰 작성</ReviewBtn>
              </BtnWrap>
            </TicketBodyWrap>
          </TravelCardWrap>

          <TravelCardWrap>
            <TicketHeadWrap>
              <TicketHead />
              <BarcordImg src={barcord} />
            </TicketHeadWrap>
            <TicketBodyWrap>
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
              <BtnWrap>
                <ReviewBtn>리뷰 작성</ReviewBtn>
              </BtnWrap>
            </TicketBodyWrap>
          </TravelCardWrap>
        </ItineraryWrap>
      </TravelForm>
    </React.Fragment>
  );
}

const TravelForm = styled.div`
  width: 925px;
  height: 100vh;
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
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`;

const TravelCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 520px;
  height: 200px;
  display: flex;
  border-radius: 10px;
  margin: 10px 10px;
`;
const TicketHeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 134px;
  height: 200px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border-right: 2px dashed #e2e2e2;
`;
const TicketHead = styled.div`
  width: 30px;
  height: 100%;
  background: rgba(29, 198, 209, 0.3);
  border-radius: 15px 0px 0px 15px;
`;
const BarcordImg = styled.img`
  height: 43px;
  width: 140px;
  transform: rotate(90deg);
`;

const TicketBodyWrap = styled.div`
  position: relative;
  width: 387px;
  height: 200px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
`;

const JourneyWrap = styled.div`
  margin: 46px 55px 25px 55px;
  width: 278px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #919191;
  font-size: 22px;
`;
const Journey = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #121212;
`;

const DepartureDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 55px 0 55px;
`;
const DeapartureTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #484848;
  margin-right: 10px;
`;
const DeapartureDate = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #484848;
`;

const BtnWrap = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  margin: 0 35px;
`;
const ReviewBtn = styled.button`
  width: 90px;
  height: 35px;
  font-weight: 600;
  border: 2px solid #1dc6d1;
  color: #1dc6d1;
  border-radius: 41px;
  font-size: 14px;
  margin-bottom: 17px;
`;

export default WentTrip;
