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

function Profile() {
  const aboutBtn = AboutButton;
  const contactBtn = ContactButton;

  
  const data = [
    { goal: "Goal", actionPndg: "Action" },
    { goal: "Goal2", actionPndg: "Action2" },
    { goal: "Goal3", actionPndg: "Action3" },
  ];

  const [oldGoal, setGoal] = useState("Old goal");
  
  const removeF = function () {
    console.log("clicked!");
  };
  
  const addF = function () {
    setGoal("New goal");
  };
  
  
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
          <thead>
            <th class="table-top">Goal</th>
            <th class="table-top">What has to happen to accomplish it?</th>
            <th class="table-top">Remove?</th>
          </thead>
          <GoalTable3Col
            goal={data[0].goal}
            actionPndg={data[0].actionPndg}
            removeF={removeF}
          ></GoalTable3Col>
          <GoalTable3Col
            goal={data[1].goal}
            actionPndg={data[1].actionPndg}
            removeF={removeF}
          ></GoalTable3Col>
          <GoalTable3Col
            goal={data[2].goal}
            actionPndg={data[2].actionPndg}
            removeF={removeF}
          ></GoalTable3Col>
          <GoalTable3Col
            goal={oldGoal}
            actionPndg={data[2].actionPndg}
            removeF={removeF}
          ></GoalTable3Col>
          <AddTable3Col addF={addF}></AddTable3Col>
          <InputTable3Col></InputTable3Col>
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
          <thead>
            <th class="table-top">Goal</th>
            <th class="table-top">How often?</th>
            <th class="table-top">For how long?</th>
            <th class="table-top">Remove?</th>
          </thead>
          <tbody id="cgttb">
            <tr>
              <th class="table-goal">Exercise</th>
              <td>Daily</td>
              <td>30 min</td>
              <td>
                <div class="checkbox-container">
                  <input
                    type="checkbox"
                    class="table-checkbox"
                    data-test="exercise"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-goal">Meditate</th>
              <td>Daily</td>
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
              <td class="add-goal-plus-button" id="cgtAdd">
                +
              </td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
              <td class="dummy-goal-row"></td>
            </tr>
          </tbody>
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
          <thead>
            <th class="table-top">Goal</th>
            <th class="table-top">How often?</th>
            <th class="table-top">Which action?</th>
            <th class="table-top">Remove?</th>
          </thead>
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
          <thead>
            <th class="table-top">Activity</th>
            <th class="table-top">How often?</th>
            <th class="table-top">Daily time allowed</th>
            <th class="table-top">Remove?</th>
          </thead>
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
          <thead>
            <th class="table-top">Activity</th>
            <th class="table-top">Until when?</th>
            <th class="table-top">Remove?</th>
          </thead>
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
          <thead>
            <th class="table-top">Event</th>
            <th class="table-top">Date</th>
            <th class="table-top">Notes</th>
            <th class="table-top">Remove?</th>
          </thead>
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
