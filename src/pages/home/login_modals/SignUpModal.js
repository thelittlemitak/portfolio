import React, { Fragment } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

function SignUpModal(props) {
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
        <button type="submit">Sign Up</button>
      </form>
      <div className="alert-title">
          Do you have an account already? Then you are ready to{" "}
          <button onClick={props.changerTunnel}>login!</button>
        </div>
    </div>,
    document.getElementById("modal2")
  );
}

export default SignUpModal;
