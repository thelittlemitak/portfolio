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
      goal: "Change career path",
      action: "Study and get a coding job",
      id: 0.7419944699444685,
    },
    {
      goal: "Linda's present",
      action: "Check a concert to go",
      id: 0.7419944699232888,
    },
    {
      goal: "Belen bills",
      action: "Pay 4 of them at the end of the month",
      id: 0.7419576879444222,
    },
    {
      goal: "Bea email",
      action: "Mirar lo del Kaution ",
      id: 0.7419228888844222,
    },
    {
      goal: "Cita DNI",
      action: "Necesito esperar para que me salgan fechas cuando estoy",
      id: 0.7412343328844222,
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
      length_: "Book next week MT",
      id: 0.2219945439284685,
    },
    {
      goal: "Rewe order",
      freq: "Weekly (Fri)",
      length_: "Book next week Rewe for Monday morning",
      id: 0.2219945439284685,
    },
    {
      goal: "A/D videos",
      freq: "Every 2 weeks",
      length_: "After/before body videos",
      id: 0.2219945439284685,
    },
    {
      goal: "Fruit/water supply",
      freq: "Daily (2h before MT)",
      length_: "Drink a lot and eat fruits before training",
      id: 0.2219945439284685,
    },
    {
      goal: "Youtube vlog",
      freq: "Every Saturday",
      length_: "You know the drill",
      id: 0.2219945333284685,
    },
    {
      goal: "Cocinar dietas",
      freq: "Every day",
      length_: "You know the drill",
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
      length_: "One second",
      id: 0.2215648555284685,
    },
    {
      goal: "What's app",
      freq: "Daily",
      length_: "30 min",
      id: 0.2215641234124284685,
    },
  ];
  const forbiddenActivitiesData = [
    { goal: "Youtube", action: "Post MT", id: 0.7419944699444684 },
    { goal: "Phone", action: "Post MT", id: 0.7419576869444683 },
  ];
  const socialGatheringsData = [
    {
      goal: "Belu",
      freq: "Every Monday 15:00",
      length_: "None",
      id: 0.7419221219444444,
    },
    {
      goal: "Aphex Twin",
      freq: "08.06.2023",
      length_: "Sweeden",
      id: 0.2215648439284685,
    },
    {
      goal: "Hybral/Lesser Of",
      freq: "28.04.2023",
      length_: "Zaski",
      id: 0.2285855439284685,
    },
    {
      goal: "Cita Jobcenter",
      freq: "26.04.2023",
      length_: "Zaski",
      id: 0.2285855436666685,
    },
  ];
  const ideasData = [
    {
      goal: "Guitar",
      action: "Try shoegaze effects",
      id: 0.7415556799444685,
    },
    {
      goal: "Renoise",
      action: "Try renoise plugin",
      id: 0.7415551112344685,
    },
    {
      goal: "App para entrenar blockieren",
      action: " ",
      id: 0.7415123212344685,
    },
    {
      goal: "Piano",
      action: "Ya tu sabe",
      id: 0.7415199912344685,
    },
  ];
  const hobbiesData = [
    {
      goal: "Video games",
      action: "Cities: Skylines",
      id: 0.7415551232144685,
    },
  ];

  const repTitles = [
    "Goal",
    "Add/Remove",
    "How often?",
    "Goal/task",
    "Comments",
  ];
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
        altBtn4={AboutButton}
        altBtn5={DummyBtn}
      ></Header>
      <h2>Welcome to the TO-DO</h2>
      <h3>A structured set of sections to remind you what you have to do</h3>
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
