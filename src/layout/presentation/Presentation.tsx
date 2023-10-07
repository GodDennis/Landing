import styled from "styled-components";
import { StyledBtn } from "../../components/StyledBtn";
import Stats from "../../components/stats";
import MainContent from "../../components/mainContent";
import { objStats } from "../../store";
import img from "../../assets/Presentation.png";
import CardPanel from "../../components/cardPanel";
import circle from "../../assets/Circle.svg";
import { StyledContainer } from "../../components/Container";

type PresentationPropsType = {
  title: string;
  Ytitle: string;
  text: string;
  btnTxt?: string;
  image: string;
  stats: objStats[];
};

const Presentation = (props: PresentationPropsType) => {
  return (
    <Hero>
      <StyledContainer>
        <HeroWrapper>
          <MainContent
            title={props.title}
            Ytitle={props.Ytitle}
            text={props.text}
            btnTxt={props.btnTxt}
          />
          <Stats stats={props.stats} />
          <Product>
            <StyledBackgroundImg src={props.image} alt="most popular nft" />
            <Blure></Blure>
            <StyledCircle src={circle} alt="star" />
            <CardPanel />
          </Product>
        </HeroWrapper>
      </StyledContainer>
    </Hero>
  );
};

export default Presentation;

const Hero = styled.section`
  padding-top: 220px;
  @media screen and (min-width: 769px) and (max-width: 1350px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 0 40px 0;
  }
`;

const HeroWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: center;
  grid-template-areas:
    "a c"
    "b c";
  @media screen and (max-width: 480px) {
    grid-template-areas: "a" "c" "b";
  }
  @media screen and (min-width: 481px) and (max-width: 1350px) {
    grid-template-areas: "a" "c" "b";
    justify-content: center;
  }
`;

const Product = styled.div`
  grid-area: c;
  justify-self: flex-end;
  text-align: center;
  max-width: 544px;
  width: 100%;
  position: relative;
  margin-top: -20px;
  @media screen and (max-width: 480px) {
    justify-self: center;
    width: 100%;
    height: 420px;
    margin-top: 0;
    margin-bottom: 48px;
  }
  @media screen and (min-width: 481px) and (max-width: 1350px) {
    justify-self: center;
    margin-bottom: 150px;
    margin-top: 0;
  }
`;
const StyledBackgroundImg = styled.img`
  max-width: 464px;
  width: 100%;
  @media screen and (max-width: 480px) {
    max-width: 294px;
    width: 100%;
    height: 344px;
  }
`;

const StyledCircle = styled.img`
  position: absolute;
  top: 223px;
  left: -25px;
  @media screen and (max-width: 480px) {
    top: 173px;
    left: 10%;
    width: 82px;
    height: 81px;
  }
`;

export const Blure = styled.div`
  position: absolute;
  top: 157px;
  left: -336px;
  max-width: 631px;
  width: 100%;
  height: 458px;
  background: #1f413d;
  filter: blur(200px);
  z-index: -1;
`;
