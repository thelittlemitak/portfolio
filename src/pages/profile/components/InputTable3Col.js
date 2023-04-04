function InputTable3Col(props) {



  return (
    <tbody>
      <tr>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder={props.placeHolder1Tunnel}
            className={props.classTunnel1}
            value={props.goalDefaultTunnel}
            onChange={props.goalLiFTunnel}
          />
        </td>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder={props.placeHolder2Tunnel}
            className={props.classTunnel2}
            value={props.actionDefaultTunnel}
            onChange={props.actionLiFTunnel}
          />
        </td>
        <td class="add-goal-plus-button" onClick={props.btnFTunnel}>
          +
        </td>
      </tr>
    </tbody>
  );
}

// I removed id="tgAdd" from last td (the checker)

export default InputTable3Col;
