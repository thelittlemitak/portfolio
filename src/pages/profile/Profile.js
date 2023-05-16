import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutButton from "../../components/btns/AboutButton";
import ContactButton from "../../components/btns/ContactButton";
import TempoGoals from "./mains/TempoGoals";
import ContGoalsTD from "./mains/ContGoalsTD";
import ContGoalsAD from "./mains/ContGoalsAD";
import LimitedActivities from "./mains/LimitedActivities";
import ForbiddenActivities from "./mains/ForbiddenActivities";
import SocialGatherings from "./mains/SocialGatherings";
import SignUpBtn from "../../components/btns/SignUpBtn";
import LoginBtn from "../../components/btns/LoginBtn";
import ForumBtn from "../../components/btns/ForumBtn";
import Ideas from "./mains/Ideas";
import GenericWrapper from "../../components/GenericWrapper";
import Hobbies from "./mains/Hobbies";
import MotivatorBtn from "../../components/btns/MotivatorBtn";
import WarmerBtn from "../../components/btns/WarmerBtn";
import DummyBtn from "../../components/btns/DummyBtn";
import LogOutBtn from "../../components/btns/LogOutBtn";

function Profile() {
  const tempoGoalsData = [
    {
      goal: "Buy new bed",
      action: "Check the store Pablo said",
      id: 0.7419944699232888,
    },
    {
      goal: "Belen's bills",
      action: "Pay the bills at the end of the month",
      id: 0.7419576879444222,
    },
    {
      goal: "Career change",
      action: "Check the website Jason said",
      id: 0.7419228888844222,
    },
  ];
  const contGoalsTDData = [
    {
      goal: "Meditate",
      freq: "Daily",
      length_: "15 minutes",
      id: 0.0919944699284685,
    },
  ];
  const contGoalsADData = [
    {
      goal: "MT schedule",
      freq: "Weekly (Fri)",
      length_: "Book slots for the next week",
      id: 0.2219945439284685,
    },
    {
      goal: "Rewe online order",
      freq: "Weekly (Fri)",
      length_: "Book next week Rewe for Monday morning",
      id: 0.2219945439284685,
    },
    {
      goal: "Fruit/water supply",
      freq: "Daily (2h before MT)",
      length_: "Drink a lot and eat fruits before training",
      id: 0.2219945439284685,
    },
    {
      goal: "Cooking",
      freq: "Every Sunday",
      length_: "Cook meals for the week",
      id: 0.4728394728937498,
    },
  ];
  const limitedActivitiesData = [
    {
      goal: "Instagram",
      freq: "Daily",
      length_: "One second",
      id: 0.2215648439284685,
    },
    {
      goal: "Facebook",
      freq: "Daily",
      length_: "One minute",
      id: 0.2215648555284685,
    },
    {
      goal: "WhatsApp",
      freq: "Daily",
      length_: "30 minutes",
      id: 0.2215641234124284685,
    },
  ];
  const forbiddenActivitiesData = [
    { goal: "PlayStation", action: "Until the end of June", id: 0.7419944699444684 },
    { goal: "Scalextric", action: "Until the end of the week", id: 0.7419576869444683 },
  ];
  const socialGatheringsData = [
    {
      goal: "Joan",
      freq: "Every Monday at 15:00",
      length_: "Bring flowers",
      id: 0.7419221219444444,
    },
    {
      goal: "Aphex Twin",
      freq: "08.06.2023",
      length_: "Get some tickets",
      id: 0.2215648439284685,
    },
  ];
  const ideasData = [
    {
      goal: "Play Guitar in a cave",
      action: "Bring shoegaze effect pedals",
      id: 0.7415556799444685,
    },
    {
      goal: "Buy Renoise or Redux",
      action: "Try the plugin inside Ableton",
      id: 0.7415551112344685,
    },
    {
      goal: "Blocking App",
      action: "Do an App to train boxing blocking",
      id: 0.7415123212344685,
    },
  ];
  const hobbiesData = [
    {
      goal: "Video games",
      action: "Skyrim",
      id: 0.7415551232144685,
    },
    {
      goal: "TV show",
      action: "Sopranos",
      id: 0.7415551212341234185,
    },
  ];

  const repTitles = ["Goal", "+/-", "How often?", "Goal/task", "Comments"];
  const titles3col = [
    {
      type: "temporary goals",
      col1: repTitles[3],
      col2: repTitles[4],
      col3: repTitles[1],
    },
    {
      type: "forbidden activities",
      col1: repTitles[0],
      col2: "Until when?",
      col3: repTitles[1],
    },
    {
      type: "ideas",
      col1: "Idea",
      col2: repTitles[4],
      col3: repTitles[1],
    },
    {
      type: "ideas",
      col1: "Hobby",
      col2: repTitles[4],
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

  // const navigate = useNavigate();

  // const outLogger = function () {
  //   sessionStorage.clear("isLoggedIn");
  //   sessionStorage.clear("user");
  //   localStorage.clear("isLoggedIn");
  //   localStorage.clear("user");
  //   navigate("/");
  //   window.scroll(0, 0);
  // };

  return (
    <GenericWrapper>
      <Header
        altBtn1={ForumBtn}
        altBtn2={MotivatorBtn}
        altBtn3={WarmerBtn}
        altBtn4={DummyBtn}
        altBtn5={DummyBtn}
        saluteStyleTunnel={"salute-wrapper display-none"}
      ></Header>
      <h2 className="h2-profile">TO-DO</h2>
      <h3 className="h2-h3-profile">
        A structured set of tables to remind you what you have to do
      </h3>
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
        <Ideas dataTunnel={ideasData} titlesTunnel={titles3col}></Ideas>
        <Hobbies dataTunnel={hobbiesData} titlesTunnel={titles3col}></Hobbies>
      </main>
      <LogOutBtn></LogOutBtn>
      <Footer></Footer>
    </GenericWrapper>
  );
}

export default Profile;
