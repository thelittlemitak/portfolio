function GoalTable4Col(props) {
  return (
    <tbody>
      <tr>
        <th class="table-goal">{props.goalTunnel}</th>
        <td>{props.actionPndgTunnel}</td>
        <td>{props.lengthTunnel}</td>
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

export default GoalTable4Col;
