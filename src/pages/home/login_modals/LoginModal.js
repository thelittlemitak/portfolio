import React, { Fragment } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

function LoginModal(props) {
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
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
        </div>
        <div>
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <button type="submit">Login</button>
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
