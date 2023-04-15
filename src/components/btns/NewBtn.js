import ReactDom from "react-dom";

function NewBtn(props) {
  return (
    <button
      className="moti-btns new-btns"
      onClick={props.addFTunnel}
    >
      <strong>NEW</strong>
    </button>
  );
}

export default NewBtn;
