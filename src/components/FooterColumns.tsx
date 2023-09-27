import React from "react";
import styled from "styled-components";

type FooterColumnsPropsType = {
  columsName: string;
  items: string[];
};

const FooterColumns = (props: FooterColumnsPropsType) => {
  const items = props.items.map((el) => {
    return (
      <li>
        <a href="">{el}</a>
      </li>
    );
  });
  return (
    <StyledFooterColumn>
      <h3>{props.columsName}</h3>
      <ul>{items}</ul>
    </StyledFooterColumn>
  );
};

export default FooterColumns;

const StyledFooterColumn = styled.div``;
