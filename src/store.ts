import first from "./assets/first.png";
import second from "./assets/second.png";
import Cyber from "./assets/Cyber.png";
import Charge from "./assets/Charge.png";
import Surgeon from "./assets/Surgeon.png";
import Presentation from "./assets/Presentation.png";
import Ellipse1 from "./assets/Ellipse 1.png";
import Ellipse2 from "./assets/Ellipse 2.png";
import Ellipse3 from "./assets/Ellipse 3.png";
import Ellipse4 from "./assets/Ellipse 4.png";
import Ellipse5 from "./assets/Ellipse 5.png";
import UserNFT1 from "./assets/UserNFT 1.png";
import UserNFT2 from "./assets/UserNFT 2.png";
import UserNFT3 from "./assets/UserNFT 3.png";
import UserNFT4 from "./assets/UserNFT 4.png";
import UserNFT5 from "./assets/UserNFT 5.png";

export const store = {
  Hero: {
    title: "Discover and Collect The Best NFTs",
    Ytitle: "Digital Art.",
    text: "Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!",
    btnTxt: "Explore Now",
    stats: [
      { indicators: "8.9", item: "Art work" },
      { indicators: "65", item: "Artist" },
      { indicators: "87", item: "Collection" },
    ],
    image: Presentation,
    card: {
      time: "03:24:56",
      coast: "0.24ETH",
      btnTxt: "Place A Bid",
    },
  },
  WeekArt: {
    headerSection: {
      firstWord: "Amazing",
      subTitle: "and Super Unique Art of This",
      lastWord: "Week",
      btnTxt: "See All",
    },
    Cards: {
      info: [
        {
          title: "Cyberpunk Cocomo",
          coast: " 490ETH",
          time: "03:24:56",
          img: Cyber,
        },
        {
          title: "Charge, Qi tiao yu",
          coast: " 490ETH",
          time: "03:24:56",
          img: Charge,
        },
        {
          title: "Surgeon, Josh Rife",
          coast: " 490ETH",
          time: "03:24:56",
          img: Surgeon,
        },
      ],
      btnTxt: "Place A Bid",
    },
  },
  Create: {
    subtitle: "Create And Sell Your Best NFTs",
    text: "Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!",
    btnTxt: "Create Now",
    first,
    second,
  },
  Popular: {
    firstWord: "Popular",
    subTitle: "Artists",
    lastWord: " On This Week",
    btnTxt: "See All",
    Artists: [
      { img: UserNFT1, name: "Osvaldo Percy", avatar: Ellipse1 },
      { img: UserNFT2, name: "Ranson Sqiure", avatar: Ellipse2 },
      { img: UserNFT5, name: "Cristio leo", avatar: Ellipse5 },
      { img: UserNFT3, name: "Sebastian waltan", avatar: Ellipse3 },
      { img: UserNFT4, name: "Abraham Zack", avatar: Ellipse4 },
    ],
  },
  Subscribe: {
    subtitle: "Subscribe And get our Updates Every Week",
    text: "We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly",
    btnTxt: "Subscribe",
  },
};

// types
export type objStats = {
  indicators: string;
  item: string;
};

export type objHeaderSection = {
  firstWord: string;
  subTitle: string;
  lastWord: string;
  btnTxt: string;
};

export type CardsType = {
  info: InfoType[];
  btnTxt: string;
};

export type InfoType = {
  title: string;
  coast: string;
  time?: string;
  img: string;
};

export type ArtistsType = {
  img?: string;
  name?: string;
  avatar?: string;
};
