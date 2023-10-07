import React from "react";
import logo from "./../assets/logo.svg";
import mobileLogo from "./../assets/mobileLogo.svg";
const Logo = () => {
  return (
    <a style={{ zIndex: "10" }} aria-label="link on main page" href="">
      <img
        src={logo}
        width="196px"
        alt="Logo"
        srcSet={`${mobileLogo} 375w, ${logo} 480w `}
      />
    </a>
  );
};
// srcSet={`${mobileLogo} 400w`}
export default Logo;
