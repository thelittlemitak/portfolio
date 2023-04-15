import ReactDom from "react-dom";

function RemoveBtn(props) {
  return (
    <button
      className="moti-btns remover"
      onClick={props.removerTunnel}
      itemID={props.idTunnel}
      
    >
      REMOVE
    </button>
  );
}

export default RemoveBtn;
