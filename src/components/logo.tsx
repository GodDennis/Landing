import React from "react";
import logo from "./../assets/logo.svg";
import mobileLogo from "./../assets/mobileLogo.svg";
const Logo = () => {
  return (
    <a aria-label="link on main page" href="">
      <img src={logo} alt="Logo" />
    </a>
  );
};
// srcSet={`${mobileLogo} 400w`}
export default Logo;
