import React from "react";
import styled from "styled-components";
import { StyledBtn } from "../../components/StyledBtn";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import { StyledContainer } from "../../components/Container";

const CreateNFT = () => {
  return (
    <StyledCreateNFT>
      <StyledContainer>
        <CreateNFTWrapper>
          <StyledCreateInfo>
            <h2>
              Create And Sell Your <span>Best NFTs</span>
            </h2>
            <p>
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence!
            </p>
            <StyledBtn>Create Now</StyledBtn>
            <a href="">Learn More</a>
          </StyledCreateInfo>
          <StyledBlockImg>
            <StyledFirstImg src={first} aria-hidden></StyledFirstImg>
            <StyledSecondImg src={second} aria-hidden></StyledSecondImg>
          </StyledBlockImg>
        </CreateNFTWrapper>
      </StyledContainer>
    </StyledCreateNFT>
  );
};

export default CreateNFT;

const StyledCreateNFT = styled.section`
  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const CreateNFTWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  h2 {
    margin-bottom: 20px;
    color: var(--white-white-stich, #fffffd);
    font-weight: 500;
    line-height: 120%;
    @media screen and (max-width: 480px) {
      max-width: 250px;
      width: 100%;
      margin: 0 auto 20px auto;
    }
  }
  p {
    margin-bottom: 40px;
    color: var(--white-white-stich, #fffffd);
    line-height: 160%; /* 25.6px */
    @media screen and (max-width: 480px) {
      margin-bottom: 30px;
    }
    @media screen and (min-width: 481px) and (max-width: 1260px) {
      justify-content: center;
    }
  }
  a {
    margin-left: 36px;
    color: var(--white-white-stich, #fffffd);
    font-weight: 700;
    line-height: 120%; /* 19.2px */
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
  @media screen and (min-width: 481px) and (max-width: 1350px) {
    gap: 60px;
    justify-content: center;
  }
`;

const StyledCreateInfo = styled.div`
  margin-top: 90px;
  align-self: center;
  max-width: 426px;
  width: 100%;
  @media screen and (min-width: 481px) and (max-width: 1350px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
    max-width: 343px;
    width: 100%;
    margin-top: 0px;
  }
`;
const StyledBlockImg = styled.div`
  max-width: 740px;
  /* height: 559px; */
  width: 100%;
  position: relative;
  aspect-ratio: 10/7.6;
  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-bottom: 35px;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
    max-width: 343px;
    margin-top: 20px;
    height: 260px;
  }
`;
const StyledFirstImg = styled.img`
  position: absolute;
  top: 159px;
  z-index: 10;
  width: 56%;
  @media screen and (max-width: 480px) {
    top: 74px;
    left: 0px;
  }
`;
const StyledSecondImg = styled.img`
  position: absolute;
  right: 0px;
  width: 56%;
`;
