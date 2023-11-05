import "./Header.css";
import AboutButton from "./btns/AboutButton";
import ContactButton from "./btns/ContactButton";
import SignUpBtn from "./btns/SignUpBtn";
import LoginBtn from "./btns/LoginBtn";
import ScalingAlert from "./ScalingAlert";
import { useEffect, useState } from "react";

function Header(props) {
  let sAStyle = "sa-main-wrapper";

  if (
    localStorage.getItem("user") ||
    sessionStorage.getItem("user") == "recruiter"
  ) {
    sAStyle = "sa-main-wrapper hidden";
  }

  return (
    <header className="main-header sticky">
      <a className="logo-box logo-box--index" href="/portfolio">
        M<div id="logo-a">ore</div>M<div id="logo-b">ore</div>M
        <div id="logo-c">e</div>
      </a>
      <div className="button-area">
        <props.altBtn1 openedTunnel1={props.openedTunnel1}></props.altBtn1>
        <props.altBtn2 openedTunnel2={props.openedTunnel2}></props.altBtn2>
        <props.altBtn3></props.altBtn3>
        {/* <div className="salute-wrapper"> */}
        <div className={props.saluteStyleTunnel}>
          <div className="salute">{props.saluteTextTunnel}</div>
        </div>
        <props.altBtn5 userNameTunnel={props.userNameTunnel}></props.altBtn5>
        <props.altBtn4></props.altBtn4>
      </div>
      <ScalingAlert
        lt1="r"
        lt2="e"
        lt3="c"
        lt4="r"
        lt5="u"
        lt6="i"
        lt7="t"
        lt8="e"
        lt9="r"
        styleTunnel={sAStyle}
      ></ScalingAlert>
    </header>
  );
}

export default Header;
