import React from "react";
import "./App.css";
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
    </div>
  );
}

export default App;
