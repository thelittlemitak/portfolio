import React, { useState } from "react";

import "../profile/style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutButton from "../../components/btns/AboutButton";
import ForumBtn from "../../components/btns/ForumBtn";
import GenericWrapper from "../../components/GenericWrapper";
import TodoBtn from "../../components/btns/TodoBtn";
import MotivatorBtn from "../../components/btns/MotivatorBtn";
import WarmerTable from "./WarmerTable";
import DummyBtn from "../../components/btns/DummyBtn";
import LogOutBtn from "../../components/btns/LogOutBtn";

function Warmer() {
  const greatefulActionsData = [
    {
      goal: "I studied for 2 hours",
      action: "You are a beast!",
      id: 0.75676547457,
    },
    {
      goal: "Trained 30 min with my bike in the morning",
      action: "Better do 20 minutes",
      id: 0.53452345,
    },
  ];

  const greatefulPossessionsData = [
    {
      goal: "I have a house with hot water",
      action: "You are lucky!",
      id: 0.23523452345245,
    },
    {
      goal: "Healthy family",
      action: "Your sister loves you!",
      id: 0.765754675467,
    },
  ];

  const explanations = [
    "Here are the actions that you took today and you are grateful for",
    "Here are the possessions that you have and are grateful for. Maybe others are not this lucky...",
  ];

  const addRemoveTitle = "Add/Remove";
  const titles3col = [
    {
      type: "Grateful actions",
      col1: "Action",
      col2: "Comments (or congratulate yourself!)",
      col3: addRemoveTitle,
    },
    {
      type: "Grateful possessions",
      col1: "Possession",
      col2: "Comments (or congratulate yourself!)",
      col3: addRemoveTitle,
    },
  ];

  return (
    <GenericWrapper>
      <Header
        altBtn1={TodoBtn}
        altBtn2={ForumBtn}
        altBtn3={MotivatorBtn}
        altBtn4={DummyBtn}
        altBtn5={DummyBtn}
        saluteStyleTunnel={"salute-wrapper display-none"}
      ></Header>
      <h2 className="h2-profile">WARMER</h2>
      <h3 className="h2-h3-profile">A system to remind you what you should be greateful for</h3>
      <main className="main-profile-container">
        <WarmerTable
          dataTunnel={greatefulActionsData}
          titlesTunnel={titles3col[0]}
          explanationsTunnel={explanations[0]}
          mainTitleTunnel={titles3col[0].type}
        ></WarmerTable>
        <WarmerTable
          dataTunnel={greatefulPossessionsData}
          titlesTunnel={titles3col[1]}
          explanationsTunnel={explanations[1]}
          mainTitleTunnel={titles3col[1].type}
        ></WarmerTable>
      </main>
      <LogOutBtn></LogOutBtn>

      <Footer></Footer>
    </GenericWrapper>
  );
}

export default Warmer;
