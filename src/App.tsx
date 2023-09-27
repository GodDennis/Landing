import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { GlobalStyles } from "./Global.styles";
import Presentation from "./layout/presentation/Presentation";

import { store } from "./store";
import WeekArt from "./layout/weekArt/WeekArt";
import CreateNFT from "./layout/createNFT/CreateNFT";
import Popular from "./layout/popular/Popular";
import Subscribe from "./layout/Subscribe/Subscribe";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <StyledWrapper>
        <GlobalStyles />
        <Header btnTxt="Contact" />
        <Presentation
          title={store.Hero.title}
          Ytitle={store.Hero.Ytitle}
          text={store.Hero.text}
          btnTxt={store.Hero.btnTxt}
          stats={store.Hero.stats}
          image={store.Hero.image}
        />
        <WeekArt
          headerSection={store.WeekArt.headerSection}
          cards={store.WeekArt.Cards}
        />
        <CreateNFT />
        <Popular
          artist={store.Popular.Artists}
          firstWord={store.Popular.firstWord}
          subTitle={store.Popular.subTitle}
          lastWord={store.Popular.lastWord}
          btnTxt={store.Popular.btnTxt}
        />
        <Subscribe />
        <Footer />
      </StyledWrapper>
    </div>
  );
}

export default App;

const StyledWrapper = styled.div`
  width: 1512px;
  margin: 0 auto;
  padding: 0 111px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 375px;
    padding: 0 16px;
    text-align: center;
    overflow: hidden;
  }
`;
