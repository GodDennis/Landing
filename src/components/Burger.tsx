import { type } from "os";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type BurgerPropsType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

const Burger = (props: BurgerPropsType) => {
  return (
    <StyledBurger
      onClick={() => {
        props.toggle ? props.setToggle(false) : props.setToggle(true);
      }}>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>
  );
};

export default Burger;

const StyledBurger = styled.div`
  z-index: 10;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
      width: 24px;
      height: 2px;
      background-color: #fff;
    }
  }
`;
