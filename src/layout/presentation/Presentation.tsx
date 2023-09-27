import styled from "styled-components";
import { StyledBtn } from "../../components/StyledBtn";
import Stats from "../../components/stats";
import MainContent from "../../components/mainContent";
import { objStats } from "../../store";
import img from "../../assets/Presentation.png";
import CardPanel from "../../components/cardPanel";
import circle from "../../assets/Circle.svg";

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
    </Hero>
  );
};

export default Presentation;

const Hero = styled.section`
  display: grid;
  grid-template-areas:
    "a c"
    "b c";
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-areas: "a" "c" "b";
    padding-top: 60px;
  }
`;

const Product = styled.div`
  grid-area: c;
  justify-self: flex-end;
  width: 544px;
  position: relative;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    height: 420px;
    margin-bottom: 48px;
  }
`;
const StyledBackgroundImg = styled.img`
  margin-left: 40px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 294px;
    height: 344px;
    margin-left: 3px;
  }
`;

const StyledCircle = styled.img`
  position: absolute;
  top: 223px;
  left: -25px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    top: 173px;
    left: 0;
    width: 82px;
    height: 81px;
  }
`;

export const Blure = styled.div`
  position: absolute;
  top: 157px;
  left: -336px;
  width: 631px;
  height: 458px;
  background: #1f413d;
  filter: blur(200px);
  z-index: -1;
`;
