import "./Header.css";

function Header() {
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
        <a className="about-button" href="about">
          ...about
        </a>
      </div>
    </header>
  );
}

export default Header;