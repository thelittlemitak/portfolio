import React, { useState } from "react";

import "../profile/style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutButton from "../../components/btns/AboutButton";
import ForumBtn from "../../components/btns/ForumBtn";
import GenericWrapper from "../../components/GenericWrapper";
import TodoBtn from "../../components/btns/TodoBtn";
import MotiTable from "./MotiTable";
import WarmerBtn from "../../components/btns/WarmerBtn";

function Motivator() {
  const goal1 = [
    {
      goal: "Career change",
      action: "Link below",
      id: 0.7419944699444685,
    },
  ];
  const goal2 = [
    {
      goal: "Leave Sykes",
      action: "This job is a horror and I deserve something better",
      id: 0.7419944699444685,
    },
    {
      goal: "Flexibility",
      action: "Being able to work from everywhere",
      id: 0.7419944123444685,
    },
    {
      goal: "Money",
      action: "Have a good salary to invest on myself and my projects",
      id: 0.7419944123444321,
    },
    {
      goal: "Leave alone",
      action: "Having a partner is a pain in the ass",
      id: 0.7419944123444321,
    },
    {
      goal: "Start with next goals",
      action: "Techno, studio, Tot Fosk, Drums",
      id: 0.7419944123444321,
    },
    {
      goal: "Stop studying",
      action: "Kind of a retro but true",
      id: 0.7419944123444321,
    },
  ];
  const goal3 = [
    {
      goal: "Not being fat",
      action: "Having a belly is not sexy",
      id: 0.7419944699444685,
    },
    {
      goal: "Muay Thai performance",
      action: "You train like shit afterwards",
      id: 0.7419944699444685,
    },
    {
      goal: "Longevity",
      action: "You will look better for a longer time",
      id: 0.7419944699444685,
    },
    {
      goal: "Health",
      action: "Less problems in the future regarding your body",
      id: 0.7419944699444685,
    },
    {
      goal: "Hotter girls",
      action: "If you are not hot, others won't be either",
      id: 0.7419944699444685,
    },
  ];
  const goal4 = [
    {
      goal: "Not being fat",
      action: "Having a belly is not sexy",
      id: 0.7419944699444685,
    },
    {
      goal: "Having more fun (MT) for longer periods of time",
      action: "Having a belly is not sexy",
      id: 0.7419944699444685,
    },
    {
      goal: "Having an amazing body",
      action: "Having a belly is not sexy",
      id: 0.7419944699444685,
    },
    {
      goal: "Longevity",
      action: "You will look better for a longer time",
      id: 0.7419944699444685,
    },
    {
      goal: "Health",
      action: "Less problems in the future regarding your body",
      id: 0.7419944699444685,
    },
    {
      goal: "Hotter girls",
      action: "If you are not hot, others won't be either",
      id: 0.7419944699444685,
    },
    {
      goal: "Being more flexible",
      action: "This reduces body pain, incl. the knee",
      id: 0.7419944699444685,
    },
  ];
  const goal5 = [
    {
      goal: "Not having headaches",
      action: "You get tension in your head and jaw",
      id: 0.7419944699444685,
    },
    {
      goal: "Not being anxious",
      action: "You get anxious very easily, sometimes without a reason",
      id: 0.7419944699444685,
    },
    {
      goal: "Not depending on something out from you",
      action:
        "It's horrible to always depend on something just to start the day/living",
      id: 0.7419944699444685,
    },
  ];
  const goal6 = [
    {
      goal: "Being able to apply to more jobs",
      action: "More jobs = better career",
      id: 0.7419944699444685,
    },
    {
      goal: "More know people in Germany",
      action: "People = Happiness and opportunities",
      id: 0.7419944699444685,
    },
    {
      goal: "Not depending on something out from you",
      action:
        "It's horrible to always depend on something just to start the day/living",
      id: 0.7419944699444685,
    },
  ];
  const goal7 = [
    {
      goal: "Mental health",
      action:
        "It just feels better to go to the office in exange for some home productivity",
      id: 0.7419944699444685,
    },
    {
      goal: "Meeting more people",
      action: "People = Happiness and opportunities",
      id: 0.7419944699444685,
    },
    {
      goal: "Stay in contact with friends",
      action: "That's life",
      id: 0.7419944699444685,
    },
  ];

  return (
    <GenericWrapper>
      <Header
        altBtn1={TodoBtn}
        altBtn2={ForumBtn}
        altBtn3={WarmerBtn}
        altBtn4={AboutButton}
      ></Header>
      <h2>Welcome to the MOTIVATOR</h2>
      <h3>A system to remind you why you are doing what you are doing</h3>
      <main className="main-profile-container">
        <MotiTable
          dataTunnel={goal1}
          title={"finishing the portfolio"}
          deadline={"03.06.2023"}
        ></MotiTable>
        <MotiTable
          dataTunnel={goal2}
          title={"career change"}
          deadline={"03.06.2023"}
        ></MotiTable>
        <MotiTable
          dataTunnel={goal3}
          title={"not drinking alcohol"}
          deadline={"03.06.2023"}
        ></MotiTable>
        <MotiTable
          dataTunnel={goal4}
          title={"Muay Thai performance"}
          deadline={"03.06.2023"}
        ></MotiTable>
        <MotiTable
          dataTunnel={goal5}
          title={"not drinking coffee"}
          deadline={"03.06.2023"}
        ></MotiTable>
        <MotiTable
          dataTunnel={goal6}
          title={"learning German"}
          deadline={"03.06.2023"}
        ></MotiTable>
        <MotiTable
          dataTunnel={goal7}
          title={"going to the office"}
          deadline={"03.06.2023"}
        ></MotiTable>
      </main>
      <Footer></Footer>
    </GenericWrapper>
  );
}

export default Motivator;
