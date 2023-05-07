import React, { useState, Fragment, useEffect } from "react";

import HeaderTable3Col from "../profile/components/HeaderTable3Col";
import DoubtIcon from "../../components/DoubtIcon";
import GoalTable3Col from "../profile/components/GoalTable3Col";
import InputTable3Col from "../profile/components/InputTable3Col";
import GenericWrapper from "../../components/GenericWrapper";
import NewBtn from "../../components/btns/NewBtn";
import EditBtn from "../../components/btns/EditBtn";
import RemoveBtn from "../../components/btns/RemoveBtn";
import "./Motivator.css";

function MotiTable(props) {
  // the problem is that when props.dataTunnel changes, tempoGoals keeps being the same
  // useEffect(() => {setTempoGoals(props.dataTunnel) }), [props.dataTunnel];

  const [tempoGoals, setTempoGoals] = useState(props.dataTunnel);
  useEffect(() => {
    setTempoGoals(props.dataTunnel);
  }, [props.dataTunnel]);

  let newNumber = Math.random();

  //test

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

    props.topLevelPusherTunnel([
      ...tempoGoals,
      {
        goal: inputTempoGoal,
        action: inputTempoAction,
        id: newNumber,
      },
    ], props.idTunnel);
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
      Pusher();
    }
  };

  return (
    <Fragment>
      <h3 className="h3-moti">Motivator for {props.title}</h3>
      <div className="moti-timing-wrapper">
        <EditBtn
          openerTunnel={props.openerTunnel}
          idTunnel={props.idTunnel}
        ></EditBtn>
        <h6>Deadline: {props.deadline}</h6>
        <h6 className="days-remaining">Days remaining: {props.daysRemainingTunnel}</h6>
      </div>
      <table className="profile-table">
        <HeaderTable3Col
          col1Tunnel={"Reasons"}
          col2Tunnel={"Why is relevant to you?"}
          col3Tunnel={"+/-"}
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
