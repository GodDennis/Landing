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
  grid: b;
  display: flex;
  font-family: Spectral;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 31px;
    justify-content: space-between;
  }
  div {
    margin-right: 24px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      padding: 0 16px;
      margin-right: 0px;
    }
  }

  div + div {
    border-left: 1px solid #d3f85a;
    padding-left: 94px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      padding-left: 30px;
    }
  }
`;
