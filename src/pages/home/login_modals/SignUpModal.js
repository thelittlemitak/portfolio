import React, { Fragment, useState } from "react";
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
            style={props.userDefaultStyleTunnel}
            type="text"
            placeholder=""
            name="uname"
            onChange={props.userLiTunnel}
            autocomplete="off"
            required
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
          />
        </div>
        <div className={props.alertStyleTunnel}>Sign up function is currently not available!</div>
        <button
          type="submit"
          onClick={props.clickerTunnel}
          className={props.btnStyleTunnel}
        >
          Sign Up
        </button>
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
