import styled, { css } from "styled-components";
import Logo from "../../components/logo";
import { StyledBtn } from "../../components/StyledBtn";
import { useRef, useState } from "react";
import Burger from "../../components/Burger";

type HeaderPropsType = {
  btnTxt?: string;
};

const Path = {
  "0": { title: "Marketplace", href: "#", role: "menuitem" },
  "1": { title: "Artists", href: "#", role: "menuitem" },
  "2": { title: "Community", href: "#", role: "menuitem" },
  "3": { title: "Collections", href: "#", role: "menuitem" },
};

type BurgerPropsType = {
  toggle?: boolean;
};

export const Header = (props: HeaderPropsType) => {
  const [active, setActive] = useState("0");

  const clickHandler = (id: string) => {
    setActive(id);
  };

  const [toggle, setToglle] = useState<boolean>(false);
  console.log(toggle);
  const list = Object.values(Path).map((el, i) => {
    return (
      <li role={el.role}>
        <a
          href={el.href}
          className={i === +active ? "active" : ""}
          onClick={() => {
            clickHandler(i.toString());
          }}>
          {el.title}
        </a>
      </li>
    );
  });

  return (
    <StyledHeader>
      <Logo />
      <StyledNav toggle={toggle}>
        <ul role="menu">{list}</ul>
      </StyledNav>
      <HeaderBtn>{props.btnTxt}</HeaderBtn>
      <Burger toggle={toggle} setToggle={setToglle} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  padding-top: 28px;
  padding-bottom: 28px;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding-bottom: 0px;
  }
`;

const StyledNav = styled.nav<BurgerPropsType>`
  ul {
    display: flex;
    gap: 40px;
    li {
      ${".active"} {
        border-bottom: 1px solid #d3f85a;
      }
      a {
        color: rgba(255, 255, 253, 0.72);
        font-weight: 400;
        line-height: 160%;
        &:hover {
          border-bottom: 1px solid #d3f85aae;
        }
      }
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    ${(props) =>
      props.toggle
        ? `
    display:flex;
    z-index:1;
      ul{
        transition: margin 1s ease-out;
        overflow: hidden;
        position:absolute;
        flex-direction: column;
        background-color:#2d2e2f;
        opacity:0.97;
        width:480px;
        height:100vh;
        top:0px;
        left:0px;
        margin-top: 0px;
        font-size:24px;
          li:nth-child(1){
            margin-top:200px;
          }
      }
    `
        : `
        display:flex;
        z-index:1;
        ul{
          background-color:#2d2e2f;
        opacity:0.97;
          position: fixed;
          top:-100vh;
          margin-top:-100vh;
          transition: margin 1s ease-out;
        }
          
          `}
  }
`;

const HeaderBtn = styled(StyledBtn)`
  /* display: none; */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
  }
`;
