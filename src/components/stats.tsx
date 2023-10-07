import React from "react";
import StatsItem from "./statsItem";
import styled from "styled-components";
import { objStats } from "../store";

type StatsPropsType = {
  stats: objStats[];
};

const Stats = (props: StatsPropsType) => {
  const Item = props.stats.map((el) => {
    return <StatsItem indicators={el.indicators} item={el.item} />;
  });
  return <StyledStats>{Item}</StyledStats>;
};

export default Stats;
const StyledStats = styled.div`
  max-width: 544px;
  width: 100%;
  grid-area: b;
  display: flex;
  font-family: Spectral;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  gap: 27px;
  justify-content: space-between;
  line-height: 120%; /* 57.6px */
  @media screen and (max-width: 480px) {
    font-size: 31px;
    /* justify-content: space-between; */
    gap: 0px;
  }
  div {
    @media screen and (max-width: 480px) {
      padding: 0 16px;
    }
  }

  div + div {
    border-left: 1px solid #d3f85a;
    padding-left: 15%;
    @media screen and (max-width: 768px) {
      padding-left: 12%;
    }
  }
`;
