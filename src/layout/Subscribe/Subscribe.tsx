import React from "react";
import styled from "styled-components";
import { CreateNFTWrapper } from "../createNFT/CreateNFT";
import { StyledBtn } from "../../components/StyledBtn";
import rotateImg from "../../assets/rotate.png";
import staticImg from "../../assets/static.png";
import { StyledContainer } from "../../components/Container";

const Subscribe = () => {
  return (
    <StyledSubscribe>
      <StyledContainer>
        <SubscribeWrapper as={CreateNFTWrapper}>
          <BlockImg>
            <RotateImg src={rotateImg} aria-hidden />
            <StaticImg src={staticImg} aria-hidden />
          </BlockImg>
          <InfoBlock>
            <SubscribeSubtitle>
              Subscribe And <span>get our Updates</span> Every Week
            </SubscribeSubtitle>
            <SubcribeText>
              We have a blog related to NFT so we can share thoughts and
              routines on our blog which is updated weekly
            </SubcribeText>
            <SubcribeForm>
              <SubscribeInput placeholder="Enter your e-mail"></SubscribeInput>
              <Btn type="submit" as={StyledBtn}>
                Subscribe
              </Btn>
            </SubcribeForm>
          </InfoBlock>
        </SubscribeWrapper>
      </StyledContainer>
    </StyledSubscribe>
  );
};

export default Subscribe;

const SubscribeSubtitle = styled.h2``;

const SubscribeWrapper = styled.div`
  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
  }
`;

const StyledSubscribe = styled.section`
  padding: 92px 0;
  ${SubscribeSubtitle} {
    margin-bottom: 20px;
    margin-top: 10px;
    @media screen and (max-width: 480px) {
      max-width: 340px;
      width: 100%;
      margin: 0 auto 20px auto;
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;
const BlockImg = styled.div`
  position: relative;
  max-width: 630px;
  width: 100%;
  aspect-ratio: 4/3;
  @media screen and (max-width: 480px) {
    order: 2;
    max-width: 345px;
    align-self: center;
    height: 254px;
  }
`;

const RotateImg = styled.img`
  position: absolute;
  width: 75%;
  left: 0px;
`;
const StaticImg = styled.img`
  position: absolute;
  position: absolute;
  width: 45%;
  top: 110px;
  right: 0px;
  @media screen and (max-width: 480px) {
    top: 60px;
  }
`;

const InfoBlock = styled.div`
  max-width: 520px;
  width: 100%;
  align-self: center;
  @media screen and (max-width: 1350px) {
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    max-width: 343px;
    width: 100%;
    /* margin-top: 0px; */
    order: 1;
    margin-bottom: 90px;
  }
`;

const SubcribeText = styled.p``;
const SubcribeForm = styled.form`
  position: relative;
  width: 100%;
  height: 60px;
  @media screen and (max-width: 480px) {
    max-width: 343px;
    width: 100%;
  }
`;
const SubscribeInput = styled.input`
  position: relative;
  width: 100%;
  padding: 16px 190px 16px 24px;
  color: var(--white-dissable-1, rgba(255, 255, 253, 0.72));
  font-size: 16px;
  line-height: 160%;
  border-radius: 8px;
  background: var(--background-background-4, #131e3a);
  @media screen and (max-width: 480px) {
    max-width: 343px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
const Btn = styled.input`
  position: absolute;
  line-height: 120%;
  height: 52px;
  top: 3px;
  right: 2px;
  @media screen and (max-width: 480px) {
    position: relative;
  }
`;
