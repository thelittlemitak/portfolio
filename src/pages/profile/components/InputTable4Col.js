function InputTable4Col(props) {
  return (
    <tbody>
      <tr>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder="New Goal"
            class="profile-input profile-input-goal"
            value={props.goalDefaultTunnel}
            onChange={props.goalLiFTunnel}
          />
        </td>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder="What has to happen to accomplish it?"
            class="profile-input profile-input-text"
            value={props.freqDefaultTunnel}
            onChange={props.freqLiFTunnel}
          />
        </td>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder="What has to happen to accomplish it?"
            class="profile-input profile-input-text"
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
