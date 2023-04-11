import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

function LoginModal(props) {
  const [user, setUser] = useState("");

  if (!props.statusTunnel) {
    return;
  }

  return ReactDom.createPortal(
    <div className="modal-wrapper">
      <form>
        <div>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            style={props.userDefaultStyleTunnel}
            type="text"
            placeholder=""
            name="uname"
            onChange={props.userLiTunnel}
            autocomplete="off"
            required
            value={props.valueTunnel}
            ref={props.userInputRefTunnel}
          />
        </div>
        <div>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            style={props.pwDefaultStyleTunnel}
            type="password"
            placeholder=""
            name="psw"
            onChange={props.pwLiTunnel}
            required
            ref={props.pwInputRefTunnel}
            value={props.value2Tunnel}
          />
        </div>
        <section className="keeper-wrapper">
          <input type="checkbox" onChange={props.checkboxLiTunnel}></input>
          <div>Keep me logged</div>
        </section>
        <div className={props.alertStyleTunnel}>Email or password introduced is wrong!</div>
        <button
          type="button"
          onClick={props.clickerTunnel}
          className={props.btnStyleTunnel}
        >
          Login
        </button>
      </form>
      <div className="alert-title">
        You don't have an account yet? Let's{" "}
        <button onClick={props.changerTunnel}>sign up!</button>
      </div>
    </div>,
    document.getElementById("modal1")
  );
}

export default LoginModal;
