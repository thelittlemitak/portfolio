import React, { useState, Fragment } from "react";

import HeaderTable4Col from "../components/HeaderTable4Col";
import DoubtIcon from "../../../components/DoubtIcon";
import GoalTable4Col from "../components/GoalTable4Col";
import InputTable4Col from "../components/InputTable4Col";
import GenericWrapper from "../../../components/GenericWrapper";

function ContGoalsAD(props) {
  const [contGoalsTD, setContGoalsTD] = useState(props.dataTunnel);

  let newNumber = Math.random();

  const [inputContGoalsTD, setInputContGoalsTD] = useState("");
  const [inputFreqContGoalsTD, setInputFreqContGoalsTD] = useState("");
  const [inputLengthContGoalsTD, setInputLengthContGoalsTD] = useState("");

  let [classer1, setclasser1] = useState("");
  let [classer2, setclasser2] = useState("");
  let [classer3, setclasser3] = useState("");

  function contGoalTDListener(e) {
    let inputContGoalsTD = e.target.value;
    setInputContGoalsTD(inputContGoalsTD);
    if (inputContGoalsTD.length != 0) {
      setclasser1("");
      return classer1;
    }
  }

  function freqContGoalTDListener(e) {
    let inputFreqContGoalsTD = e.target.value;
    setInputFreqContGoalsTD(inputFreqContGoalsTD);
    if (inputFreqContGoalsTD.length != 0) {
      setclasser2("");
      return classer2;
    }
  }

  function lengthContGoalTDListener(e) {
    let inputLengthContGoalsTD = e.target.value;
    setInputLengthContGoalsTD(inputLengthContGoalsTD);
    if (inputLengthContGoalsTD.length != 0) {
      setclasser3("");
      return classer3;
    }
  }

  const Pusher = function () {
    if (
      inputContGoalsTD.length === 0 ||
      inputFreqContGoalsTD.length === 0 ||
      inputLengthContGoalsTD.length === 0
    ) {
      if (inputContGoalsTD.length === 0) {
        setclasser1("empty-input");
      }
      if (inputFreqContGoalsTD.length === 0) {
        setclasser2("empty-input");
      }
      if (inputLengthContGoalsTD.length === 0) {
        setclasser3("empty-input");
      }
      return;
    }
    setContGoalsTD([
      ...contGoalsTD,
      {
        goal: inputContGoalsTD,
        freq: inputFreqContGoalsTD,
        length_: inputLengthContGoalsTD,
        id: newNumber,
      },
    ]);
    setclasser1("");
    setclasser2("");
    setclasser3("");
    setInputContGoalsTD("");
    setInputFreqContGoalsTD("");
    setInputLengthContGoalsTD("");
  };

  const removeF = function (e) {
    let idOfCheckboxPressed = e.target.id;
    let indexOfCheckboxPressed = contGoalsTD.findIndex(
      (x) => x.id == idOfCheckboxPressed
    );
    contGoalsTD.splice(indexOfCheckboxPressed, 1);
    setContGoalsTD([...contGoalsTD]);
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
        Continuous goals/tasks (action dependent)
        <DoubtIcon></DoubtIcon>
        <div class="info-box info-box--hidden">
          These are the goals/tasks that repeat in time, regardless of how much time they take. An
          example could be tidying up your bedroom every day or prepare the meals for the
          weekend every Thursday.
        </div>
      </h3>
      <table class="profile-table">
        <HeaderTable4Col
          col1Tunnel={props.titlesTunnel[1].col1}
          col2Tunnel={props.titlesTunnel[1].col2}
          col3Tunnel={props.titlesTunnel[1].col3}
          col4Tunnel={props.titlesTunnel[1].col4}
        ></HeaderTable4Col>
        {contGoalsTD.map((x) => (
          <GoalTable4Col
            goalTunnel={x.goal}
            actionPndgTunnel={x.freq}
            lengthTunnel={x.length_}
            idTunnel={x.id}
            btnFTunnel={removeF}
            key={x.id}
          ></GoalTable4Col>
        ))}
        <InputTable4Col
          btnFTunnel={Pusher}
          goalLiFTunnel={contGoalTDListener}
          freqLiFTunnel={freqContGoalTDListener}
          lengthLiFTunnel={lengthContGoalTDListener}
          goalDefaultTunnel={inputContGoalsTD}
          freqDefaultTunnel={inputFreqContGoalsTD}
          lengthDefaultTunnel={inputLengthContGoalsTD}
          placeHolder1Tunnel={"Activity"}
          placeHolder2Tunnel={"Frequency"}
          placeHolder3Tunnel={"Accomplishments"}
          classTunnel1={`profile-input profile-input-goal ${classer1}`}
          classTunnel2={`profile-input profile-input-goal ${classer2}`}
          classTunnel3={`profile-input profile-input-goal ${classer3}`}
          keyPusherTunnel={keyPusher}
        ></InputTable4Col>
      </table>
    </Fragment>
  );
}

export default ContGoalsAD;
