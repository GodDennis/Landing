import styled, { css } from "styled-components";
import Logo from "../../components/logo";
import { StyledBtn } from "../../components/StyledBtn";
import { useEffect, useRef, useState } from "react";
import Burger from "../../components/Burger";
import { StyledContainer } from "../../components/Container";

type HeaderPropsType = {
  btnTxt?: string;
};

const Path = {
  "0": { title: "Marketplace", href: "#", role: "menuitem" },
  "1": { title: "Artists", href: "#", role: "menuitem" },
  "2": { title: "Community", href: "#", role: "menuitem" },
  "3": { title: "Collections", href: "#", role: "menuitem" },
};

type NavPropsType = {
  toggle?: boolean;
};

export const Header = (props: HeaderPropsType) => {
  const [active, setActive] = useState("0");
  const [toggle, setToglle] = useState<boolean>(false);

  function burgerScrollHandler() {
    toggle
      ? (document.body.style.overflowY = "hidden") &&
        (document.documentElement.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible") &&
        (document.documentElement.style.overflowY = "visible");
  }

  useEffect(() => {
    burgerScrollHandler();
  }, [toggle]);
  const clickHandler = (id: string) => {
    setActive(id);
  };

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
    <StyledHeader toggle={toggle}>
      <StyledContainer>
        <HeaderWrapper>
          <HeaderLogo />
          <StyledNav toggle={toggle}>
            <ul role="menu">{list}</ul>
          </StyledNav>
          <HeaderBtn>{props.btnTxt}</HeaderBtn>
          <Burger toggle={toggle} setToggle={setToglle} />
        </HeaderWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

const HeaderLogo = styled(Logo)`
  z-index: 111;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
  @media screen and (max-width: 768px) {
    padding: 16px 0;
    min-width: 345px;
  }
`;

const StyledHeader = styled.header<NavPropsType>`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  z-index: 111;
  position: fixed;
  left: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;

const StyledNav = styled.nav<NavPropsType>`
  max-width: 435px;
  width: 100%;
  ul {
    display: flex;
    gap: 15px;
    justify-content: space-between;
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
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.toggle
        ? `
            display:flex;
            text-align:center;
            z-index:1;
              ul{
                transition: margin 1s ease-out;
                position:fixed;
                flex-direction: column;
                background-color:#2d2e2f;
                opacity:0.97;
                width:100%;
                height:100vh;
                top:0px;
                left:0px;
                font-size:24px;
                justify-content: unset;
                gap:24px;
                  li:nth-child(1){
                    margin-top:120px;
                  }
              }
    `
        : `
            display:flex;
            z-index:1;
            text-align:center;
              ul{
                transition: margin 1s ease-out;
                position:fixed;
                justify-content: unset;
                gap:24px;
                flex-direction: column;
                background-color:#2d2e2f;
                opacity:0.97;
                width:100%;
                height:100vh;
                left:0px;
                margin-top:-110vh;
              }
          `}
  }
`;

const HeaderBtn = styled(StyledBtn)`
  /* display: none; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
