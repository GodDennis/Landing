import React from "react";
import styled from "styled-components";
import Logo from "../../components/logo";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";
import Telegram from "../../assets/Telegram.svg";
import Facebook from "../../assets/Facebook.svg";
import FooterColumns from "../../components/FooterColumns";
import { StyledContainer } from "../../components/Container";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <FooterWrapper>
          <BrendWrapper>
            <Brend>
              <Logo></Logo>
              <BrendTxt>
                Discover NFTs by category, track the latest drop, and and follow
                the collections you love. Enjoy it!
              </BrendTxt>
              <ul role="menu">
                <li role="menuitem">
                  <BrendLink aria-label="Facebook link" href="#">
                    <img src={Facebook} alt="Facebook" />
                  </BrendLink>
                </li>
                <li role="menuitem">
                  <BrendLink aria-label="Telegram link" href="#">
                    <img src={Telegram} alt="Telegram" />
                  </BrendLink>
                </li>
                <li role="menuitem">
                  <BrendLink aria-label="Twitter link" href="#">
                    <img src={Twitter} alt="Twitter" />
                  </BrendLink>
                </li>
                <li role="menuitem">
                  <BrendLink aria-label="Linkedin link" href="#">
                    <img src={Linkedin} alt="Linkedin" />
                  </BrendLink>
                </li>
              </ul>
            </Brend>
            <FooterMenuLinks>
              <FooterColumns
                columsName="Explore"
                items={[
                  "Art Sign In",
                  "Collectibles",
                  "Domain Name",
                  "Utility",
                ]}
              />
              <FooterColumns
                columsName="Statistic"
                items={["Ranking", "Collectibles", "Activity"]}
              />
              <FooterColumns
                columsName="Company"
                items={["About Us", "Career", "Support", "Partners"]}
              />
              <FooterColumns
                columsName="Resources"
                items={["Help Center", "Platform Status", "Blog"]}
              />
            </FooterMenuLinks>
          </BrendWrapper>
          <CopyRights>
            <div>© Copyright 2023 - Creativeart</div>
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </CopyRights>
        </FooterWrapper>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.footer`
  padding-top: 60px;
  @media screen and (max-width: 480px) {
    padding-top: 10px;
  }
`;
const FooterWrapper = styled.div`
  padding: 14px 0px;
  a {
    color: #fff;
    &:hover {
      color: #d3f85a;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0px 0;
  }
`;
const BrendWrapper = styled.div`
  padding: 0 20px;
  padding-top: 18px;
  padding-bottom: 48px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--white-dissable, #838382);
  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: left;
    gap: 0;
    padding: 0 0 38px 0;
  }
`;

const CopyRights = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  display: flex;
  justify-content: space-between;
  div {
    &:nth-child(2) {
      display: flex;
      gap: 28px;
      @media screen and (max-width: 480px) {
        flex-direction: column;
        text-align: left;
        gap: 26px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: left;
    gap: 25px;
    padding-top: 52px;
  }
`;

const FooterMenuLinks = styled.div`
  gap: 10px;
  max-width: 688px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    color: var(--white-main-white, #fff);
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
  }
  a {
    white-space: nowrap;
    color: var(--white-white-stich, #fffffd);
    font-weight: 400;
    line-height: 160%; /* 25.6px */
  }
  li {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 22px;
  }
`;

const Brend = styled.div`
  max-width: 272px;
  width: 100%;
  ul {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 52px;
  }
`;
const BrendTxt = styled.p`
  margin-top: 5px;
  margin-bottom: 24px;
  line-height: 160%; /* 25.6px */
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 32px;
  }
`;
const BrendLink = styled.a``;
