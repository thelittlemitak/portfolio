import "./ReadyButton.css";

function ReadyButton(props) {
  return (
    <div className="ready-button-container">
      <button className="ready-button" onClick={props.openedTunnel}>
        <strong>I AM READY!</strong>
      </button>
    </div>
  );
}

export default ReadyButton;
