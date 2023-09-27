import React from "react";
import styled from "styled-components";
import Cards from "../../components/cards";
import { CardsType, objHeaderSection } from "../../store";
import { StyledBtn } from "../../components/StyledBtn";

type WeekArtPropsType = {
  headerSection: objHeaderSection;
  cards: CardsType;
};

const WeekArt = (props: WeekArtPropsType) => {
  return (
    <StyledWeekArt>
      <h2>
        <span>{props.headerSection.firstWord} </span>
        {props.headerSection.subTitle}
        <span> {props.headerSection.lastWord}</span>
      </h2>
      <BtnContainer>
        <Btn>{props.headerSection.btnTxt}</Btn>
      </BtnContainer>
      <Cards cards={props.cards} />
    </StyledWeekArt>
  );
};

export default WeekArt;

const StyledWeekArt = styled.section`
  display: grid;
  grid-template-areas:
    "d e "
    "f f";
  /* margin-bottom: 64px; */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-areas:
      "d"
      "f"
      "f"
      "f"
      "e";
    padding-bottom: 36px;
  }
  h2 {
    grid-area: d;
    width: 550px;
    font-weight: 500;
    line-height: 120%;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 100%;
      font-size: 31px;
      text-align: center;
      justify-content: center;
      align-self: center;
      margin-bottom: 32px;
    }
    span {
      color: #d3f85a;
    }
  }
`;
const BtnContainer = styled.div`
  grid-area: e;
  justify-self: flex-end;
  align-self: flex-end;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-self: center;
    align-self: flex-start;
    margin-top: 30px;
  }
`;
const Btn = styled(StyledBtn)`
  line-height: 175%;
  font-family: Inter;
`;
