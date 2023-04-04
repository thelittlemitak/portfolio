function InputTable4Col(props) {
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
            value={props.freqDefaultTunnel}
            onChange={props.freqLiFTunnel}
          />
        </td>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder={props.placeHolder3Tunnel}
            className={props.classTunnel3}
            value={props.lengthDefaultTunnel}
            onChange={props.lengthLiFTunnel}
          />
        </td>
        <td class="add-goal-plus-button" onClick={props.btnFTunnel}>
          +
        </td>
      </tr>
    </tbody>
  );
}

export default InputTable4Col;
