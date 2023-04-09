import "./Header.css";
import AboutButton from "./btns/AboutButton";
import ContactButton from "./btns/ContactButton";
import SignUpBtn from "./btns/SignUpBtn";
import LoginBtn from "./btns/LoginBtn";

function Header(props) {
  return (
    <header className="main-header sticky">
      <a className="logo-box logo-box--index" href="/">
        M<div id="logo-a">ore</div>M<div id="logo-b">ore</div>M
        <div id="logo-c">e</div>
      </a>
      <div className="button-area">
        <props.altBtn1 openedTunnel1={props.openedTunnel1}></props.altBtn1>
        <props.altBtn2 openedTunnel2={props.openedTunnel2}></props.altBtn2>
        <props.altBtn3></props.altBtn3>
        <div className="salute-wrapper">
          <div className="salute">
            {props.saluteTextTunnel}
          </div>
        </div>
        <props.altBtn5 userNameTunnel={props.userNameTunnel}></props.altBtn5>
        <props.altBtn4></props.altBtn4>
      </div>
    </header>
  );
}

export default Header;
