import React from "react";
import styled from "styled-components";

type StatsItemPropsType = {
  indicators: string;
  item: string;
};

const StatsItem = (props: StatsItemPropsType) => {
  return (
    <StyledStatsItem>
      <StyledNumber>
        {props.indicators}
        <span>K</span>
      </StyledNumber>
      <StyledStatsName>{props.item}</StyledStatsName>
    </StyledStatsItem>
  );
};

export default StatsItem;

const StyledStatsItem = styled.div`
  text-align: left;
`;

const StyledNumber = styled.p`
  color: #d3f85a;
  span {
    color: #fffffd;
  }
`;

const StyledStatsName = styled.p`
  font-size: 16px;
  color: #fffffd;
`;
