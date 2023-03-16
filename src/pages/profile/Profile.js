import React, { useState } from "react";

import "./style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutButton from "../../components/AboutButton";
import ContactButton from "../../components/ContactButton";
import TempoGoals from "./mains/TempoGoals";
import ContGoalsTD from "./mains/ContGoalsTD";
import ContGoalsAD from "./mains/ContGoalsAD";
import LimitedActivities from "./mains/LimitedActivities";
import ForbiddenActivities from "./mains/ForbiddenActivities";
import SocialGatherings from "./mains/SocialGatherings";

function Profile() {
  const aboutBtn = AboutButton;
  const contactBtn = ContactButton;

  const tempoGoalsData = [
    { goal: "Change career path", action: "Study and get a coding job", id: 0.7419944699444685 },
  ];
  const contGoalsTDData = [
    {
      goal: "Exercise",
      freq: "Daily",
      length_: "30 minutes",
      id: 0.0919944699284685,
    },
  ];
  const contGoalsADData = [
    {
      goal: "Order",
      freq: "Daily",
      length_: "Clean room",
      id: 0.2219945439284685,
    },
  ];
  const limitedActivitiesData = [
    {
      goal: "Instagram",
      freq: "Daily",
      length_: "One second",
      id: 0.2215648439284685,
    },
  ];
  const forbiddenActivitiesData = [
    { goal: "Facebook", action: "Until June", id: 0.7419944699444685 },
  ];
  const socialGatheringsData = [
    {
      goal: "Linda's",
      freq: "Tomorrow",
      length_: "Bring wine",
      id: 0.2215648439284685,
    },
  ];

  const repTitles = ["Goal", "Add/Remove", "How often?"];
  const titles3col = [
    {
      type: "temporary goals",
      col1: repTitles[0],
      col2: "What has to happen to accomplish it?",
      col3: repTitles[1],
    },
    {
      type: "forbidden activities",
      col1: repTitles[0],
      col2: "Until when?",
      col3: repTitles[1],
    },
  ];
  const titles4col = [
    {
      type: "cont. goals (time dependent)",
      col1: repTitles[0],
      col2: repTitles[2],
      col3: "For how long?",
      col4: repTitles[1],
    },
    {
      type: "cont. goals (action dependent)",
      col1: repTitles[0],
      col2: repTitles[2],
      col3: "Which action?",
      col4: repTitles[1],
    },
    {
      type: "limited activities",
      col1: "Activity",
      col2: repTitles[2],
      col3: "Daily time allowed",
      col4: repTitles[1],
    },
    {
      type: "forbidden activities",
      col1: "Activity",
      col2: "For how long?",
      col3: repTitles[1],
    },
    {
      type: "social gatherings",
      col1: "Event",
      col2: "Date",
      col3: "Notes",
      col4: repTitles[1],
    },
  ];

  return (
    <div>
      <Header altBtn={aboutBtn}></Header>
      <main className="main-profile-container">
        <TempoGoals
          dataTunnel={tempoGoalsData}
          titlesTunnel={titles3col}
        ></TempoGoals>
        <ContGoalsTD
          dataTunnel={contGoalsTDData}
          titlesTunnel={titles4col}
        ></ContGoalsTD>
        <ContGoalsAD
          dataTunnel={contGoalsADData}
          titlesTunnel={titles4col}
        ></ContGoalsAD>
        <LimitedActivities
          dataTunnel={limitedActivitiesData}
          titlesTunnel={titles4col}
        ></LimitedActivities>
        <ForbiddenActivities
          dataTunnel={forbiddenActivitiesData}
          titlesTunnel={titles4col}
        ></ForbiddenActivities>
        <SocialGatherings
          dataTunnel={socialGatheringsData}
          titlesTunnel={titles4col}
        ></SocialGatherings>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
