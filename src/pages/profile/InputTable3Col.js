import React, { useState } from "react";

function InputTable3Col(props) {
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
