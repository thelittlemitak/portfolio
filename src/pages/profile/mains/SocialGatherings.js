import React, { useState, Fragment } from "react";

import HeaderTable4Col from "../components/HeaderTable4Col";
import DoubtIcon from "../../../components/DoubtIcon";
import GoalTable4Col from "../components/GoalTable4Col";
import InputTable4Col from "../components/InputTable4Col";
import GenericWrapper from "../../../components/GenericWrapper";

function SocialGatherings(props) {
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

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let monthString = month.toString();
  let year = currentDate.getFullYear();

  if (monthString.length < 2) {
    month = "0" + month;
  }

  let formattedDate = `${day}.${month}.${year}`;

  return (
    <Fragment>
      <h3 class="h3-profile">
          Social gatherings
          <DoubtIcon></DoubtIcon>
          <div class="info-box info-box--hidden">
            Simple schedule for your social life and networking purposes.
            Remember that spending time with others it's important, at least
            once a week; healthy relationships will make you feel better about
            life (and eventually make you work harder).
          </div>
        </h3>
      <table class="profile-table">
        <HeaderTable4Col
          col2Tunnel={props.titlesTunnel[4].col2}
          col3Tunnel={props.titlesTunnel[4].col3}
          col1Tunnel={props.titlesTunnel[4].col1}
          col4Tunnel={props.titlesTunnel[4].col4}
        ></HeaderTable4Col>
        {contGoalsTD.map((x) => (
          <GoalTable4Col
            goalTunnel={x.goal}
            actionPndgTunnel={x.freq}
            lengthTunnel={x.length_}
            idTunnel={x.id}
            key={x.id}
            btnFTunnel={removeF}
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
          placeHolder1Tunnel={"Event description"}
          placeHolder2Tunnel={formattedDate}
          placeHolder3Tunnel={"Flowers maybe?"}
          classTunnel1={`profile-input profile-input-goal ${classer1}`}
          classTunnel2={`profile-input profile-input-goal ${classer2}`}
          classTunnel3={`profile-input profile-input-goal ${classer3}`}
        ></InputTable4Col>
      </table>
    </Fragment>
  );
}

export default SocialGatherings;
