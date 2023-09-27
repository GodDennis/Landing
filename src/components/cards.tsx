import React from "react";
import styled from "styled-components";
import { CardsType } from "../store";
import { StyledBtn } from "./StyledBtn";
import btc from "../assets/btc.svg";
import clock from "../assets/clock.svg";

type CardsPropsType = {
  cards: CardsType;
};

const Cards = (props: CardsPropsType) => {
  const Card = props.cards.info.map((el) => {
    return (
      <StyledWrapper>
        <ImageWrapper>
          <StyledCardImg src={el.img} alt="card NFT" />
        </ImageWrapper>
        <StyledCardPanel>
          <StyledCardInfo>
            <StyledCardName>{el.title}</StyledCardName>
            <StyledCardCoast>
              <img src={btc} alt="coast" />
              {el.coast}
            </StyledCardCoast>
          </StyledCardInfo>
          <StyledCardFooter>
            <EndInBar>
              <EndInItem>Ending In</EndInItem>
              <StyledCardTime>
                <img src={clock} alt="time" />
                <span> </span>
                {el.time}
              </StyledCardTime>
            </EndInBar>
            <StyledPanelButton>{props.cards.btnTxt}</StyledPanelButton>
          </StyledCardFooter>
        </StyledCardPanel>
      </StyledWrapper>
    );
  });
  return <StyledCards>{Card}</StyledCards>;
};

export default Cards;

const StyledCards = styled.div`
  grid-area: f;
  display: flex;
  gap: 30px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;
const StyledWrapper = styled.div`
  margin-top: 62px;
  display: flex;
  width: 410px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 28px;
  border-top: 1px solid var(--Primary, #d3f85a);
  background: var(--background-background-4, #131e3a);

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    width: 343px;
    padding: 16px;
    margin-top: 0px;
    gap: 20px;
  }
`;
const ImageWrapper = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 311px;
    height: 340px;
  }
`;
const StyledCardImg = styled.img`
  cursor: pointer;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    object-fit: cover;
    width: 100%;
    height: 340px;
  }
`;
const StyledCardPanel = styled.div`
  width: 100%;
`;
const StyledCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const EndInBar = styled.div``;
const EndInItem = styled.div`
  text-align: left;
  color: var(--white-dissable, #838382);
  font-size: 14px;
  line-height: 160%;
`;
const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledCardTime = styled.div`
  line-height: 160%;
`;
const StyledCardName = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 20px;
  }
`;
const StyledCardCoast = styled.div`
  align-items: flex-start;
  font-weight: 700;
  line-height: 160%;
`;
const StyledPanelButton = styled(StyledBtn)`
  border-radius: 8px;
  border: 1px solid var(--Primary, #d3f85a);
  background-color: inherit;
  color: #d3f85a;
`;
