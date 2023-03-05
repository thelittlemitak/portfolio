import React, { useState } from "react";

function AddTable3Col(props) {
  return (
    <tbody>
      <tr>
        <td class="add-goal-plus-button" id="tgAdd" onClick={props.addF}>
          +
        </td>
        <td class="dummy-goal-row"></td>
        <td class="dummy-goal-row"></td>
      </tr>
    </tbody>
  );
}

export default AddTable3Col;