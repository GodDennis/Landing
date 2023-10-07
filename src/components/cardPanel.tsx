import React from "react";
import styled from "styled-components";
import { StyledBtn } from "./StyledBtn";
import time from "../assets/clock.svg";
import eth from "../assets/btc.svg";

const CardPanel = () => {
  return (
    <StyledCard>
      <FlexContainer>
        <TimeBlock>
          <EndsIn>Ends in</EndsIn>
          <Time>05:45:47</Time>
        </TimeBlock>
        <PriceBlock>
          <Current>Current bid</Current>
          <Coast>0.24ETH</Coast>
        </PriceBlock>
      </FlexContainer>
      <BtnContainer>
        <ColorlessBtn>Piece A Bid</ColorlessBtn>
      </BtnContainer>
    </StyledCard>
  );
};

export default CardPanel;

const ColorlessBtn = styled(StyledBtn)`
  background-color: inherit;
  border-radius: 8px;
  border: 1px solid var(--Primary, #d3f85a);
  color: #d3f85a;
  width: 100%;
`;

const BtnContainer = styled.div`
  width: 100%;
`;
const StyledCard = styled.div`
  position: absolute;
  top: 74%;
  right: 0%;
  display: flex;
  max-width: 304px;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  border-top: 1px solid var(--Primary, #d3f85a);
  background: var(--background-background-4, #131e3a);
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
  @media screen and (max-width: 480px) {
    max-width: 224px;
    width: 100%;
    top: 283px;
    left: 119px;
    padding: 12px;
    gap: 16px;
  }
`;
const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const EndsIn = styled.span`
  color: var(--Primary, #d3f85a);
  font-weight: 400;
  line-height: 160%;
  white-space: nowrap;
  font-size: 14px;
  text-align: left;
`;
const Time = styled.span`
  color: var(--white-white-stich, #fffffd);
  font-weight: 700;
  line-height: 120%;
`;
const Current = styled.span`
  color: var(--Primary, #d3f85a);
  font-weight: 400;
  line-height: 160%;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    text-align: left;
  }
`;
const Coast = styled.span`
  color: var(--white-white-stich, #fffffd);
  font-weight: 700;
  line-height: 120%;
  height: 100%;
`;
const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;
const TimeBlock = styled(PriceBlock)``;

// time ? `background-image:url(${time});` : "";
