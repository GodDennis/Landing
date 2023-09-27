import React from "react";
import styled from "styled-components";
import { ArtistsType } from "../../store";
import { url } from "inspector";

import { StyledBtn } from "../../components/StyledBtn";

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
            <div>Owner</div>
            <div>{el.name}</div>
          </AvatarName>
        </AvatarInfo>
      </ArtistWrapper>
    );
  });
  return (
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
  );
};
// SubHeader
export default Popular;

const PopularWrapper = styled.section`
  display: grid;
  grid-template-areas:
    "g h"
    "j j";
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-areas:
      "g"
      "j"
      "j"
      "j"
      "j"
      "j"
      "h";
    padding-top: 32px;
  }

  h2 {
    grid-area: g;
    width: 350px;
    color: #d3f85a;
    font-weight: 500;
    line-height: 120%;
    span {
      color: #fffffd;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 250px;
      margin: 0 auto;
    }
  }
`;

const BackgroundImage = styled.img``;

const ArtistWrapper = styled.div`
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
  ${BackgroundImage} {
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 343px;
      height: 356px;
    }
  }
`;

const StyledPopular = styled.div`
  margin-top: 68px;
  grid-area: j;
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    "a1 a1 a1 b1 b1 b1 b1 b1 c1 c1 c1 c1"
    "d1 d1 d1 d1 e1 e1 e1 e1 c1 c1 c1 c1";
  justify-items: start;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-areas: "a1" "b1" "c1" "d1" "e1";
    margin-top: 32px;
    grid-gap: 16px;
    margin-bottom: 28px;
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
  div {
    &:nth-child(1) {
      color: var(--white-white-stich, #fffffd);
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 160%;
    }
    &:nth-child(2) {
      font-weight: 700;
      line-height: 120%;
    }
  }
`;

const BtnContainer = styled.div`
  /* width: 100%; */
  justify-self: flex-end;
  align-self: center;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-self: center;
  }
`;

const Btn = styled(StyledBtn)`
  grid-area: h;
  font-family: Inter;
  width: fit-content;
  line-height: 175%;
`;
