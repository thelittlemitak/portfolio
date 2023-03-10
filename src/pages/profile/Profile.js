import React, { useState } from "react";

import "./style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutButton from "../../components/AboutButton";
import ContactButton from "../../components/ContactButton";
import DoubtIcon from "../../components/DoubtIcon";
import GoalTable3Col from "./GoalTable3Col";
import AddTable3Col from "./AddTable3Col";
import InputTable3Col from "./InputTable3Col";
import HeaderTable3Col from "./HeaderTable3Col";
import HeaderTable4Col from "./HeaderTable4Col";
import GoalTable4Col from "./GoalTable4Col";
import InputTable4Col from "./InputTable4Col";

function Profile() {
  const aboutBtn = AboutButton;
  const contactBtn = ContactButton;

  //! TEMPO GOALS
  const tempoGoalsData = [
    { goal: "goal1", action: "from tempoGoals", id: 0.7419944699444685 },
    { goal: "goal2", action: "from tempoGoals", id: 0.2944508500185419 },
    { goal: "goal3", action: "from tempoGoals", id: 0.2119945356444685 },
    { goal: "goal4", action: "from tempoGoals", id: 0.0744508500185419 },
  ];

  const [tempoGoals, setTempoGoals] = useState(tempoGoalsData);

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

  //! CONT GOALS (TIME DEPENDENT)
  const contGoalsTDData = [
    {
      goal: "goal1",
      freq: "Daily",
      length_: "1 month",
      id: 0.0919944699284685,
    },
    {
      goal: "goal2",
      freq: "Monthly",
      length_: "1 month",
      id: 0.1019943847444685,
    },
    {
      goal: "goal3",
      freq: "Daily",
      length_: "1 month",
      id: 0.1132244699444685,
    },
    {
      goal: "goal4",
      freq: "Daily",
      length_: "1 month",
      id: 0.1219944694949685,
    },
  ];

  const [contGoalsTD, setContGoalsTD] = useState(contGoalsTDData);

  const [inputContGoalsTD, setInputContGoalsTD] = useState("");
  const [inputFreqContGoalsTD, setInputFreqContGoalsTD] = useState("");
  const [inputLengthContGoalsTD, setInputLengthContGoalsTD] = useState("");

  function contGoalTDListener(e) {
    let inputContGoalsTD = e.target.value;
    setInputContGoalsTD(inputContGoalsTD);
  }

  function freqContGoalTDListener(e) {
    let inputFreqContGoalsTD = e.target.value;
    setInputFreqContGoalsTD(inputFreqContGoalsTD);
  }

  function lengthContGoalTDListener(e) {
    let inputLengthContGoalsTD = e.target.value;
    setInputLengthContGoalsTD(inputLengthContGoalsTD);
  }

  const Pusher2 = function () {
    setContGoalsTD([
      ...contGoalsTD,
      {
        goal: inputContGoalsTD,
        freq: inputFreqContGoalsTD,
        length: inputLengthContGoalsTD,
        id: newNumber,
      },
    ]);
    setInputContGoalsTD("");
    setInputFreqContGoalsTD("");
    setInputLengthContGoalsTD("");
  };

  const removeF2 = function (e) {
    let idOfCheckboxPressed = e.target.id;
    let indexOfCheckboxPressed = contGoalsTD.findIndex(
      (x) => x.id == idOfCheckboxPressed
    );
    contGoalsTD.splice(indexOfCheckboxPressed, 1);
    setContGoalsTD([...contGoalsTD]);
  };

  //! TITLES
  const goalTitle = "Goal";
  const addRemoveTitle = "Add/Remove";
  const howOftenTitle = "How often?";
  const titles3col = [
    {
      type: "temporary goals",
      col1: goalTitle,
      col2: "What has to happen to accomplish it?",
      col3: addRemoveTitle,
    },
    {
      type: "forbidden activities",
      col1: goalTitle,
      col2: "Until when?",
      col3: addRemoveTitle,
    },
  ];

  const titles4col = [
    {
      type: "cont. goals (time dependent)",
      col1: goalTitle,
      col2: howOftenTitle,
      col3: "For how long?",
      col4: addRemoveTitle,
    },
    {
      type: "cont. goals (action dependent)",
      col1: goalTitle,
      col2: howOftenTitle,
      col3: "Which action?",
      col4: addRemoveTitle,
    },
    {
      type: "limited activities",
      col1: "Activity",
      col2: howOftenTitle,
      col3: "Daily time allowed",
      col4: addRemoveTitle,
    },
    {
      type: "social gatherings",
      col1: "Event",
      col2: "Date",
      col3: "Notes",
      col4: addRemoveTitle,
    },
  ];

  return (
    <div>
      <Header altBtn={aboutBtn}></Header>
      <main className="main-profile-container">
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
            col1Tunnel={titles3col[0].col1}
            col2Tunnel={titles3col[0].col2}
            col3Tunnel={titles3col[0].col3}
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

        <h3 class="h3-profile">
          Continuous goals (time dependent)
          <DoubtIcon></DoubtIcon>
          <div class="info-box info-box--hidden">
            These are the goals that can be accomplished before the day ends.
            Here you may put the activities that are part of your new habits and
            that they are accomplished after X amount of time, like having a
            30min walk or meditating 20min in the morning.
          </div>
        </h3>
        <table class="profile-table">
          <HeaderTable4Col
            col1Tunnel={titles4col[0].col1}
            col2Tunnel={titles4col[0].col2}
            col3Tunnel={titles4col[0].col3}
            col4Tunnel={titles4col[0].col4}
          ></HeaderTable4Col>
          {contGoalsTDData.map((x) => (
            <GoalTable4Col
              goalTunnel={x.goal}
              actionPndgTunnel={x.freq}
              lengthTunnel={x.length_}
              idTunnel={x.id}
              btnFTunnel={removeF2}
            ></GoalTable4Col>
          ))}
          <InputTable4Col
            btnFTunnel={Pusher2}
            goalLiFTunnel={contGoalTDListener}
            freqLiFTunnel={freqContGoalTDListener}
            lengthLiFTunnel={lengthContGoalTDListener}
            goalDefaultTunnel={inputContGoalsTD}
            freqDefaultTunnel={inputFreqContGoalsTD}
            lengthDefaultTunnel={inputLengthContGoalsTD}
          ></InputTable4Col>
        </table>

        <h3 class="h3-profile">
          Continuous goals (action dependent)
          <DoubtIcon></DoubtIcon>
          <div class="info-box info-box--hidden">
            These are the goals that can be accomplished before the day ends but
            that they only depend on a task to be done, no matter the time. An
            example could be tidying up your bedroom or prepare the meals for
            the weekend.
          </div>
        </h3>
        <table class="profile-table">
          <HeaderTable4Col
            col1Tunnel={titles4col[1].col1}
            col2Tunnel={titles4col[1].col2}
            col3Tunnel={titles4col[1].col3}
            col4Tunnel={titles4col[1].col4}
          ></HeaderTable4Col>
          <tbody id="cgatb">
            <tr>
              <th class="table-goal">Order</th>
              <td>Weekly</td>
              <td>Clean the house</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">Diet</th>
              <td>Weekly</td>
              <td>Fridge always with diet food</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="cgaAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Limited activities
          <DoubtIcon></DoubtIcon>
          <div class="info-box info-box--hidden">
            Less is more. Spending less time doing some activities can give you
            more room and peace of mind for your goals. But never forget to take
            some time for you to rest and relax. We are not robots!
          </div>
        </h3>
        <table class="profile-table">
          <HeaderTable4Col
            col1Tunnel={titles4col[2].col1}
            col2Tunnel={titles4col[2].col2}
            col3Tunnel={titles4col[2].col3}
            col4Tunnel={titles4col[2].col4}
          ></HeaderTable4Col>
          <tbody id="latb">
            <tr>
              <th class="table-goal">Facebook</th>
              <td>Daily</td>
              <td>10 min</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">TV shows</th>
              <td>L-X-F-S-D</td>
              <td>15 min</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="laAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

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
            col1Tunnel={titles3col[1].col1}
            col2Tunnel={titles3col[1].col2}
            col3Tunnel={titles3col[1].col3}
          ></HeaderTable3Col>
          <tbody id="fatb">
            <tr>
              <th class="table-goal">Instagram</th>
              <td>01/03/2029</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="faAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

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
            col1Tunnel={titles4col[3].col1}
            col2Tunnel={titles4col[3].col2}
            col3Tunnel={titles4col[3].col3}
            col4Tunnel={titles4col[3].col4}
          ></HeaderTable4Col>
          <tbody id="sgtb">
            <tr>
              <th class="table-goal">Linda's birthday</th>
              <td>01/03/2023</td>
              <td>Costume party (metal and rock). Bring a cake.</td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="add-goal-plus-button" id="sgAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
        </table>

        <h3 class="h3-profile">
          Priorities
          <DoubtIcon></DoubtIcon>
          <div class="info-box info-box--hidden">
            All the above can be overwhelming at the moment of taking action. So
            here you will find a small list of (up and down draggable)
            priorities to be sure you know right now what's next.
          </div>
        </h3>
        <table class="profile-table">
          <thead>
            <th class="table-top">Priority</th>
            <th class="table-top">Goal</th>
            <th class="table-top">Change priority</th>
            <th class="table-top">Done for today?</th>
          </thead>
          <tbody class="wrapper">
            <tr>
              <th class="table-goal">#1</th>
              <td>Rest</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#2</th>
              <td>Diet</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#3</th>
              <td>Meditate</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#4</th>
              <td>Exercise</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">#5</th>
              <td>Data</td>
              <td class="drag-cell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="drag-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </td>
              <td>
                <div class="checkbox-container">
                  <input type="checkbox" class="table-checkbox" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
