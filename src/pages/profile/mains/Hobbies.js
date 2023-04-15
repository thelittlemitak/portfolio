import React, { useState } from "react";

import HeaderTable3Col from "../components/HeaderTable3Col";
import DoubtIcon from "../../../components/DoubtIcon";
import GoalTable3Col from "../components/GoalTable3Col";
import InputTable3Col from "../components/InputTable3Col";
import GenericWrapper from "../../../components/GenericWrapper";

function Hobbies(props) {
  const [tempoGoals, setTempoGoals] = useState(props.dataTunnel);

  let newNumber = Math.random();

  const [inputTempoGoal, setInputTempoGoal] = useState("");
  const [inputTempoAction, setInputTempoAction] = useState("");

  let [classer1, setclasser1] = useState("");
  let [classer2, setclasser2] = useState("");

  function tempoGoalListener(e) {
    let inputTempoGoal = e.target.value;
    setInputTempoGoal(inputTempoGoal);
    if (inputTempoGoal.length != 0) {
      setclasser1("");
      return classer1;
    }
  }

  function tempoActionListener(e) {
    let inputTempoAction = e.target.value;
    setInputTempoAction(inputTempoAction);
    if (inputTempoAction.length != 0) {
      setclasser2("");
      return classer2;
    }
  }

  const Pusher = function () {
    if (inputTempoGoal.length === 0 || inputTempoAction.length === 0) {
      if (inputTempoGoal.length === 0) {
        setclasser1("empty-input");
      }
      if (inputTempoAction.length === 0) {
        setclasser2("empty-input");
      }
      return;
    }

    setTempoGoals([
      ...tempoGoals,
      { goal: inputTempoGoal, action: inputTempoAction, id: newNumber },
    ]);
    setclasser1("");
    setclasser2("");
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

  const keyPusher = function (e) {
    if (e.code == "Enter") {
      console.log("enter has been pressed");
      Pusher();
    }
  };

  return (
    <GenericWrapper>
      <h3 class="h3-profile">
        Hobbies
        <DoubtIcon></DoubtIcon>
        <div class="info-box info-box--hidden">
          Time to enjoy! It is good to remind ourselves what we can do when we
          finish our daily tasks. This can serve as our "present-menu" for all the work we did during the day. 
          Video games, a music instrument, a serie...
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
          placeHolder1Tunnel={"Goal summary"}
          placeHolder2Tunnel={"Deconstruction"}
          classTunnel1={`profile-input profile-input-goal ${classer1}`}
          classTunnel2={`profile-input profile-input-goal ${classer2}`}
          keyPusherTunnel={keyPusher}
        ></InputTable3Col>
      </table>
    </GenericWrapper>
  );
}

export default Hobbies;
