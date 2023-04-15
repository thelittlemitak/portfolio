import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import "./EditorModal.css";

function EditorModal(props) {
  const [user, setUser] = useState("");

  if (!props.statusTunnel) {
    return;
  }

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let dateStringed = `${year.toString()}-${month.toString()}-${day.toString()}`;
  console.log(dateStringed);
  let typer = typeof dateStringed;
  console.log(typer);


  return ReactDom.createPortal(
    <div className="modal-editor-wrapper">
      <form>
        <div>
          <label for="motivator">
            <b>Motivator for</b>
          </label>
          <input
            style={props.goalDefaultStyleTunnel}
            type="text"
            placeholder="reading, studying, etc."
            name="motivator"
            onChange={props.goalLiTunnel}
            autocomplete="off"
            required
            value={props.valueTunnel}
            ref={props.goalInputRefTunnel}
            onKeyDown={props.keyPusherTunnel}
          />
        </div>
        <div>
          <label for="deadline">
            <b>Deadline</b>
          </label>
          <input
            style={props.deadlineDefaultStyleTunnel}
            type="date"
            placeholder="04.02.23"
            autocomplete="off"
            name="deadline"
            onChange={props.deadlineLiTunnel}
            required
            value={props.value2Tunnel}
            ref={props.deadlineInputRefTunnel}
            onKeyDown={props.keyPusherTunnel}
            min={dateStringed}
          />
        </div>
        <button
          type="button"
          onClick={props.clickerTunnel}
          className={props.btnStyleTunnel}
        >
          Edit
        </button>
      </form>
    </div>,
    document.getElementById("modal3")
  );
}

export default EditorModal;