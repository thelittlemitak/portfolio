import "./Header.css";
import AboutButton from "./btns/AboutButton";
import ContactButton from "./btns/ContactButton";
import SignUpBtn from "./btns/SignUpBtn";
import LoginBtn from "./btns/LoginBtn";
import { useRef } from "react";

function HeaderAbout(props) {
  return (
    <header className="main-header sticky main-header-about" ref={props.refTunnel}>
      <div></div>
      <a className="logo-box logo-box--index" href="/">
        M<div id="logo-a">ore</div>M<div id="logo-b">ore</div>M
        <div id="logo-c">e</div>
      </a>
      <div className="button-area">
        <props.altBtn4></props.altBtn4>
      </div>
    </header>
  );
}

export default HeaderAbout;
