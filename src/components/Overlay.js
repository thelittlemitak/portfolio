import ReactDom from "react-dom";
import React, { useState } from "react";

function Overlay(props) {
  let [overlayStyle, setOverlayStyle] = useState({
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.675)",
    zIndex: 1000,
  });

  const logger = () => console.log("hi");

  if (!props.statusTunnel && !props.statusTunnel2) {
    return;
  }

  return ReactDom.createPortal(
    <div style={overlayStyle} onClick={props.closerTunnel}></div>,
    document.getElementById("portal")
  );
}

export default Overlay;
