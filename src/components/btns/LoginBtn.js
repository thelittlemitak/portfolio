import ReactDom from "react-dom";

function LoginBtn(props) {
  return (
    <button
      className="main-header-buttons"
      id="login-button"
      onClick={props.openedTunnel1}
    >
      <strong>LOGIN</strong>
    </button>
  );
}

export default LoginBtn;
