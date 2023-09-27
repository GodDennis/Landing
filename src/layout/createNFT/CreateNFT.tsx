import React from "react";
import styled from "styled-components";
import { StyledBtn } from "../../components/StyledBtn";
import first from "../../assets/first.png";
import second from "../../assets/second.png";

const CreateNFT = () => {
  return (
    <StyledCreateNFT>
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
        <StyledFirstImg src={first} aria-hidden />
        <StyledSecondImg src={second} aria-hidden />
      </StyledBlockImg>
    </StyledCreateNFT>
  );
};

export default CreateNFT;

export const StyledCreateNFT = styled.section`
  display: flex;
  text-align: left;
  justify-content: space-between;
  padding-bottom: 170px;
  h2 {
    margin-bottom: 20px;
    color: var(--white-white-stich, #fffffd);
    font-weight: 500;
    line-height: 120%;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 250px;
      margin: 0 auto 20px auto;
    }
  }
  p {
    margin-bottom: 40px;
    color: var(--white-white-stich, #fffffd);
    line-height: 160%; /* 25.6px */
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      margin-bottom: 30px;
    }
  }
  a {
    margin-left: 36px;
    color: var(--white-white-stich, #fffffd);
    font-weight: 700;
    line-height: 120%; /* 19.2px */
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding-bottom: 90px;
  }
`;
const StyledCreateInfo = styled.div`
  margin-top: 140px;
  width: 426px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 343px;
    margin-top: 0px;
  }
`;
const StyledBlockImg = styled.div`
  position: relative;
  padding-left: 153px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 45px;
  }
`;
const StyledFirstImg = styled.img`
  position: absolute;
  top: 159px;
  left: -176px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 190px;
    height: 190px;
    top: 74px;
    left: 0px;
  }
`;
const StyledSecondImg = styled.img`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 190px;
    height: 220px;
  }
`;
