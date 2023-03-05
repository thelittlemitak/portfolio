import React, { useState } from "react";

function InputTable3Col(props) {

  const [inputGoal, setInputGoal] = useState("");
  const [inputAction, setInputAction] = useState("");

  
  function goalListener(e) {
    let inputGoal = e.target.value;
    setInputGoal(inputGoal);
  }

  function actionListener(e) {
    let inputAction = e.target.value;
    setInputAction(inputAction);
  }

  function addGoal() {
    console.log("this doesn't work yet");
    console.log(inputGoal);
    console.log(inputAction);
  }

  return (
    <tbody>
      <tr>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder="New Goal"
            class="profile-input profile-input-goal"
            onChange={goalListener}
          />
        </td>
        <td class="dummy-goal-row">
          <input
            type="text"
            placeholder="What has to happen to accomplish it?"
            class="profile-input profile-input-text"
            onChange={actionListener}
          />
        </td>
        <td class="add-goal-plus-button" id="tgAdd" onClick={addGoal}>
          +
        </td>
      </tr>
    </tbody>
  );
}

export default InputTable3Col;
