import ReactDom from "react-dom";

function SignUpBtn(props) {
  return (
    <button
      className="main-header-buttons"
      id="sign-up-button"
      onClick={props.openedTunnel2}
    >
      <strong>SIGN UP</strong>
    </button>
  );
}

export default SignUpBtn;
