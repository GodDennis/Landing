import React from "react";
import styled from "styled-components";
import { StyledCreateNFT } from "../createNFT/CreateNFT";
import { StyledBtn } from "../../components/StyledBtn";
import rotateImg from "../../assets/rotate.png";
import staticImg from "../../assets/static.png";

const Subscribe = () => {
  return (
    <StyledSubscribe as={StyledCreateNFT}>
      <BlockImg>
        <RotateImg src={rotateImg} aria-hidden />
        <StaticImg src={staticImg} aria-hidden />
      </BlockImg>
      <InfoBlock>
        <SubscribeSubtitle>
          Subscribe And <span>get our Updates</span> Every Week
        </SubscribeSubtitle>
        <SubcribeText>
          We have a blog related to NFT so we can share thoughts and routines on
          our blog which is updated weekly
        </SubcribeText>
        <SubcribeForm>
          <SubscribeInput placeholder="Enter your e-mail"></SubscribeInput>
          <Btn type="submit" as={StyledBtn}>
            Subscribe
          </Btn>
        </SubcribeForm>
      </InfoBlock>
    </StyledSubscribe>
  );
};

export default Subscribe;

const SubscribeSubtitle = styled.h2``;

const StyledSubscribe = styled.section`
  padding: 92px 0;
  ${SubscribeSubtitle} {
    margin-bottom: 20px;
    margin-top: 10px;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 100%;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 343px;
    padding: 26px 0 32px 0;
  }
`;
const BlockImg = styled.div`
  position: relative;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    order: 2;
    text-align: left;
  }
`;

const RotateImg = styled.img`
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 260px;
    height: 243px;
  }
`;
const StaticImg = styled.img`
  position: absolute;
  top: 110px;
  left: 348px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    top: 60px;
    left: 190px;
    width: 152px;
    height: 190px;
  }
`;

const InfoBlock = styled.div`
  width: 520px;
  align-self: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 343px;
    margin-top: 0px;
    order: 1;
    margin-bottom: 115px;
  }
`;

const SubcribeText = styled.p``;
const SubcribeForm = styled.form`
  position: relative;
  width: 516px;
  height: 60px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 343px;
  }
`;
const SubscribeInput = styled.input`
  width: 100%;
  padding: 16px 190px 16px 24px;
  color: var(--white-dissable-1, rgba(255, 255, 253, 0.72));
  font-size: 16px;
  line-height: 160%;
  border-radius: 8px;
  background: var(--background-background-4, #131e3a);
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 343px;
    margin-bottom: 20px;
  }
`;
const Btn = styled.input`
  position: absolute;
  line-height: 120%;
  height: 52px;
  top: 50%;
  right: 0;
  transform: translate(-2%, -52%);
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    position: relative;
  }
`;
