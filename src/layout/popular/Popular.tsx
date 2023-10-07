import React from "react";
import styled from "styled-components";
import { ArtistsType } from "../../store";
import { url } from "inspector";

import { StyledBtn } from "../../components/StyledBtn";
import { StyledContainer } from "../../components/Container";

type PopularPropsType = {
  artist: ArtistsType[];
  firstWord: string;
  subTitle: string;
  lastWord: string;
  btnTxt: string;
};
type SubHeaderPropsType = {
  firstWord: string;
  subTitle: string;
  lastWord: string;
  btnTxt: string;
};

const Popular = (props: PopularPropsType) => {
  const Artists = props.artist.map((el, i) => {
    return (
      <ArtistWrapper>
        <BackgroundImage src={el.img} alt={"nft" + " " + `${i + 1}`} />
        <AvatarInfo>
          <img src={el.avatar} alt={"author image" + " " + `${i + 1}`} />
          <AvatarName>
            <h4>Owner</h4>
            <span>{el.name}</span>
          </AvatarName>
        </AvatarInfo>
      </ArtistWrapper>
    );
  });
  return (
    <StyledPopularSection>
      <StyledContainer>
        <PopularWrapper>
          <h2>
            <span>{props.firstWord} </span>
            {props.subTitle}
            <span> {props.lastWord}</span>
          </h2>
          <BtnContainer>
            <Btn>{props.btnTxt}</Btn>
          </BtnContainer>
          <StyledPopular>{Artists}</StyledPopular>
        </PopularWrapper>
      </StyledContainer>
    </StyledPopularSection>
  );
};
// SubHeader
export default Popular;

const StyledPopularSection = styled.section``;

const PopularWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "g h"
    "j j";
  @media screen and (max-width: 1350px) {
    grid-template-areas:
      "g"
      "j"
      "j"
      "j"
      "j"
      "j"
      "h";
  }

  h2 {
    grid-area: g;
    max-width: 350px;
    width: 100%;
    color: #d3f85a;
    font-weight: 500;
    line-height: 120%;
    span {
      color: #fffffd;
    }
    @media screen and (min-width: 481px) and (max-width: 1350px) {
      justify-self: center;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      max-width: 250px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  height: 100%;
  object-position: 17% 15%;
  @media screen and (max-width: 1350px) {
  }
`;

const ArtistWrapper = styled.div`
  height: 100%;
  @media screen and (max-width: 768px) {
    max-width: 550px;
    width: 100%;
    aspect-ratio: 4/4;
  }
  cursor: pointer;
  position: relative;
  &:nth-child(1) {
    grid-area: a1;
  }
  &:nth-child(2) {
    grid-area: b1;
  }
  &:nth-child(3) {
    grid-area: c1;
  }
  &:nth-child(4) {
    grid-area: d1;
  }
  &:nth-child(5) {
    grid-area: e1;
  }
`;

const StyledPopular = styled.div`
  margin-top: 68px;
  grid-area: j;
  display: grid;
  grid-gap: 30px;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "a1 a1 a1 b1 b1 b1 b1 b1 c1 c1 c1 c1"
    "d1 d1 d1 d1 e1 e1 e1 e1 c1 c1 c1 c1";
  @media screen and (min-width: 769px) and (max-width: 1350px) {
    grid-template-areas:
      "a1 a1 b1 b1 b1 b1"
      "e1 e1 e1 c1 c1 c1"
      "d1 d1 d1 c1 c1 c1";
  }
  @media screen and (max-width: 768px) {
    grid-template-areas: "a1" "b1" "c1" "d1" "e1";
    justify-items: center;
  }
`;
const AvatarInfo = styled.div`
  text-align: left;
  position: absolute;
  bottom: 24px;
  left: 24px;
`;
const AvatarName = styled.div`
  display: inline-block;
  margin-left: 12px;
  vertical-align: bottom;
  h4 {
    color: var(--white-white-stich, #fffffd);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }
  span {
    font-weight: 700;
    line-height: 120%;
  }
`;

const BtnContainer = styled.div`
  align-self: center;
  @media screen and (max-width: 1350px) {
    margin-top: 40px;
    justify-self: center;
  }
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Btn = styled(StyledBtn)`
  grid-area: h;
  font-family: Inter;
  width: fit-content;
  line-height: 175%;
`;
