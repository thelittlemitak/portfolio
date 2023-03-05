import "./Header.css";
import AboutButton from "./AboutButton";
import ContactButton from "./ContactButton";

// I removed props as an argument
function Header(props) {

  return (
    <header className="main-header sticky">
      <a className="logo-box logo-box--index" href="/">
        M<div id="logo-a">ore</div>M<div id="logo-b">ore</div>M
        <div id="logo-c">e</div>
      </a>
      <div className="button-area">
        <button className="main-header-buttons" id="login-button">
          <strong>LOGIN</strong>
        </button>
        <button className="main-header-buttons" id="sign-up-button">
          <strong>SIGN UP</strong>
        </button>
        <props.altBtn></props.altBtn>
      </div>
    </header>
  );
}

export default Header;
