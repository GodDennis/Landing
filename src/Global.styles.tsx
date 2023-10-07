import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /*Обнуление*/
*{
	padding: 0;
	margin: 0;
	border: 0;
}
*,*:before,*:after{
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{
	/* height: 100%; */
	/* overflow: hidden; */
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	min-width: 375px;
}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}
/*--------------------*/
h1{
	font-size: 64px;
	@media screen and (max-width: 480px) {
	font-size: 39px;
  }
}
h2{
	font-size:48px;
	span{
		color: #d3f85a;
	}
	@media screen and (max-width: 480px) {
	font-size: 31px;
  }
}
h1,h2{
	font-family: Spectral;
}
*:focus-visible{
	border: 1px solid #1ccfcf;
}
section{
	padding: 92px 0;
	@media screen and (min-width: 769px) and (max-width: 1350px) {
		padding: 70px 0;
	}
	@media screen and (max-width: 768px) {
    padding: 40px 0;
  }
}

`;
