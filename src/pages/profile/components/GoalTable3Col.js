function GoalTable3Col(props) {
  return (
    <tbody>
      <tr>
        <th class="table-goal">{props.goalTunnel}</th>
        <td>{props.actionPndgTunnel}</td>
          <td
            class="remove-goal-minus-button"
            onClick={props.btnFTunnel}
            id={props.idTunnel}
          >
            -
          </td>
      </tr>
    </tbody>
  );
}

// I removed data-test="the 0 one" from last input (class="table-checkbox")
// I removed id="tgtb" from tbody

export default GoalTable3Col;
