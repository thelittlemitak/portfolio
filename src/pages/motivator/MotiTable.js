import React, { useState, Fragment } from "react";

import HeaderTable3Col from "../profile/components/HeaderTable3Col";
import DoubtIcon from "../../components/DoubtIcon";
import GoalTable3Col from "../profile/components/GoalTable3Col";
import InputTable3Col from "../profile/components/InputTable3Col";
import GenericWrapper from "../../components/GenericWrapper";

function MotiTable(props) {
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
    <Fragment>
      <h3 class="h3-profile">
        Motivator for {props.title}
        <DoubtIcon></DoubtIcon>
        <h6>Deadline: {props.deadline}</h6>
        <h6>Days remaining: 69</h6>
        <h6>Working days remaining: 50</h6>
        <div class="info-box info-box--hidden">
          These are goals that, after they are accomplished, they are done
          forever. Normally, you would fill this up with your biggest dreams,
          like a new job or a new milestone in your preferred hobby.
        </div>
      </h3>
      <table class="profile-table">
        <HeaderTable3Col
          col1Tunnel={"Reasons"}
          col2Tunnel={"Why is this reason relevant to you?"}
          col3Tunnel={"Add/Remove"}
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
    </Fragment>
  );
}

export default MotiTable;
