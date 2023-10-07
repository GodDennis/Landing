import React from "react";
import styled from "styled-components";
import Cards from "../../components/cards";
import { CardsType, objHeaderSection } from "../../store";
import { StyledBtn } from "../../components/StyledBtn";
import { StyledContainer } from "../../components/Container";

type WeekArtPropsType = {
  headerSection: objHeaderSection;
  cards: CardsType;
};

const WeekArt = (props: WeekArtPropsType) => {
  return (
    <StyledWeekArt>
      <StyledContainer>
        <WeekArtWrapper>
          <h2>
            <span>{props.headerSection.firstWord} </span>
            {props.headerSection.subTitle}
            <span> {props.headerSection.lastWord}</span>
          </h2>
          <BtnWrapper>
            <Btn>{props.headerSection.btnTxt}</Btn>
          </BtnWrapper>
          <Cards cards={props.cards} />
        </WeekArtWrapper>
      </StyledContainer>
    </StyledWeekArt>
  );
};

export default WeekArt;

const StyledWeekArt = styled.section`
  padding-top: 102px;
  @media screen and (min-width: 769px) and (max-width: 1350px) {
    padding-top: 70px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

const WeekArtWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "d e "
    "f f";
  /* margin-bottom: 64px; */
  @media screen and (max-width: 1350px) {
    justify-content: center;
    grid-template-areas:
      "d"
      "f"
      "f"
      "f"
      "e";
    /* padding-bottom: 36px; */
  }
  h2 {
    grid-area: d;
    max-width: 550px;
    width: 100%;
    font-weight: 500;
    @media screen and (min-width: 481px) and (max-width: 1350px) {
      width: 100%;
      font-size: 48px;
      margin-bottom: 0px;
      text-align: center;
      margin: 0 auto;
    }
    @media screen and (max-width: 480px) {
      font-size: 30px;
      text-align: center;
    }
    span {
      color: #d3f85a;
    }
  }
`;

const BtnWrapper = styled.div`
  grid-area: e;
  justify-self: flex-end;
  align-self: flex-end;
  @media screen and (max-width: 1350px) {
    justify-self: center;
    align-self: flex-start;
    margin-top: 30px;
  }
`;
const Btn = styled(StyledBtn)`
  line-height: 175%;
  font-family: Inter;
`;
