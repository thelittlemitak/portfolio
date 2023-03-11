import React, { useState } from "react";

import HeaderTable3Col from "../components/HeaderTable3Col";
import DoubtIcon from "../../../components/DoubtIcon";
import GoalTable3Col from "../components/GoalTable3Col";
import InputTable3Col from "../components/InputTable3Col";

function ForbiddenActivities(props) {
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
        Forbidden activities
        <DoubtIcon></DoubtIcon>
        <div class="info-box info-box--hidden">
          Here you can add the habits that you want to avoid (e.g. biting your
          nails), but also temporary restrictions (by adding a date) that can
          help you focusing on your goals for some limited time (e.g. playing
          video games or using your phone).
        </div>
      </h3>
      <table class="profile-table">
        <HeaderTable3Col
          col1Tunnel={props.titlesTunnel[3].col1}
          col2Tunnel={props.titlesTunnel[3].col2}
          col3Tunnel={props.titlesTunnel[3].col3}
        ></HeaderTable3Col>
        {tempoGoals.map((x) => (
          <GoalTable3Col
            goalTunnel={x.goal}
            actionPndgTunnel={x.action}
            idTunnel={x.id}
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

export default ForbiddenActivities;
