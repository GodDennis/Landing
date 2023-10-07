import React from "react";
import styled from "styled-components";
import { StyledBtn } from "./StyledBtn";

type MainContentPropsType = {
  title: string;
  Ytitle: string;
  text: string;
  btnTxt?: string;
};

const MainContent = (props: MainContentPropsType) => {
  return (
    <StyledMainConten>
      <h1>
        {props.title}
        <span> {props.Ytitle}</span>
      </h1>
      <p>{props.text}</p>
      <PresentationBtn>{props.btnTxt || "Explore Now"}</PresentationBtn>
      <a href="">Learn More</a>
    </StyledMainConten>
  );
};

export default MainContent;

const PresentationBtn = styled(StyledBtn)`
  margin-right: 36px;
`;

const StyledMainConten = styled.div`
  text-align: left;
  max-width: 544px;
  width: 100%;
  grid-area: a;
  padding-bottom: 72px;

  h1 {
    color: var(--white-white-stich, #fffffd);
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 20px;
    span {
      color: #d3f85a;
    }
  }
  p {
    color: var(--white-white-stich, #fffffd);
    line-height: 160%;
    margin-bottom: 40px;
    @media screen and (max-width: 480px) {
      margin-bottom: 32px;
    }
  }
  a {
    background-color: inherit;
    color: #fffffd;
  }
  @media screen and (max-width: 1350px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 48px;
  }
`;
