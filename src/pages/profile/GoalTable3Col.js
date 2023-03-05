import React, { useState } from "react";

function GoalTable3Col(props) {

  return (
    <tbody id="tgtb">
      <tr>
        <th class="table-goal">{props.goal}</th>
        <td>{props.actionPndg}</td>
        <td>
          <div class="checkbox-container">
            <input
              type="checkbox"
              class="table-checkbox"
              data-test="the 0 one"
              onChange={props.addF}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default GoalTable3Col;
