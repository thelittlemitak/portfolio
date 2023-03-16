import React, { useState } from "react";

import HeaderTable3Col from "../components/HeaderTable3Col";
import DoubtIcon from "../../../components/DoubtIcon";
import GoalTable3Col from "../components/GoalTable3Col";
import InputTable3Col from "../components/InputTable3Col";

function TempoGoals(props) {
  const [tempoGoals, setTempoGoals] = useState(props.dataTunnel);

  let newNumber = Math.random();

  const [inputTempoGoal, setInputTempoGoal] = useState("");
  const [inputTempoAction, setInputTempoAction] = useState("");

  function tempoGoalListener(e) {
    let inputTempoGoal = e.target.value;
    setInputTempoGoal(inputTempoGoal);
  }

  function tempoActionListener(e) {
    let inputTempoAction = e.target.value;
    setInputTempoAction(inputTempoAction);
  }

  const Pusher = function () {
    setTempoGoals([
      ...tempoGoals,
      { goal: inputTempoGoal, action: inputTempoAction, id: newNumber },
    ]);
    console.log(tempoGoals)
    setInputTempoGoal("");
    setInputTempoAction("");
  };

  const removeF = function (e) {
    let idOfCheckboxPressed = e.target.id;
    let indexOfCheckboxPressed = tempoGoals.findIndex(
      (x) => x.id == idOfCheckboxPressed
    );
    tempoGoals.splice(indexOfCheckboxPressed, 1);
    setTempoGoals([...tempoGoals]);
  };

  return (
    <div>
      <h3 class="h3-profile">
        Temporary goals
        <DoubtIcon></DoubtIcon>
        <div class="info-box info-box--hidden">
          These are goals that, after they are accomplished, they are done
          forever. Normally, you would fill this up with your biggest dreams,
          like a new job or a new milestone in your preferred hobby.
        </div>
      </h3>
      <table class="profile-table">
        <HeaderTable3Col
          col1Tunnel={props.titlesTunnel[0].col1}
          col2Tunnel={props.titlesTunnel[0].col2}
          col3Tunnel={props.titlesTunnel[0].col3}
        ></HeaderTable3Col>
        {tempoGoals.map((x) => (
          <GoalTable3Col
            goalTunnel={x.goal}
            actionPndgTunnel={x.action}
            idTunnel={x.id}
            key={x.id}
            btnFTunnel={removeF}
          ></GoalTable3Col>
        ))}

        <InputTable3Col
          btnFTunnel={Pusher}
          goalLiFTunnel={tempoGoalListener}
          actionLiFTunnel={tempoActionListener}
          goalDefaultTunnel={inputTempoGoal}
          actionDefaultTunnel={inputTempoAction}
        ></InputTable3Col>
      </table>
    </div>
  );
}

export default TempoGoals;
