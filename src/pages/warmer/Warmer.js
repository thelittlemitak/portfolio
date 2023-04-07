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

function Warmer() {
  const greatefulActionsData = [
    {
      goal: "Study coding",
      action: "After 10 days",
      id: 0.7419919119444685,
    },
    {
      goal: "Trained 30 min with my bike",
      action: "You are a beast",
      id: 0.7419944699232888,
    },
  ];

  const greatefulPossessionsData = [
    {
      goal: "A home in Boxi",
      action: "After 10 days",
      id: 0.7419919119444685,
    },
    {
      goal: "Healthy body",
      action: "You are a beast",
      id: 0.7419944699232888,
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
        altBtn4={AboutButton}
      ></Header>
      <h2>Welcome to the WARMER</h2>
      <h3>A system to remind you what should you be greateful for</h3>
      <h3>(recommended to do at the end of the day)</h3>
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
      <Footer></Footer>
    </GenericWrapper>
  );
}

export default Warmer;
