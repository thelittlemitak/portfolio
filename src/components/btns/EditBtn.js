import ReactDom from "react-dom";

function EditBtn(props) {
  return (
    <button
      className="moti-btns"
      onClick={props.openerTunnel}
      itemID={props.idTunnel}
    >
      EDIT
    </button>
  );
}

export default EditBtn;
