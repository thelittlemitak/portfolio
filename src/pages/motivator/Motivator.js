import React, { useState, useRef, useEffect } from "react";

import "../profile/style-profile.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutButton from "../../components/btns/AboutButton";
import ForumBtn from "../../components/btns/ForumBtn";
import GenericWrapper from "../../components/GenericWrapper";
import TodoBtn from "../../components/btns/TodoBtn";
import MotiTable from "./MotiTable";
import WarmerBtn from "../../components/btns/WarmerBtn";
import DummyBtn from "../../components/btns/DummyBtn";
import LogOutBtn from "../../components/btns/LogOutBtn";
import NewBtn from "../../components/btns/NewBtn";
import EditorModal from "./EditorModal";
import Overlay from "../../components/Overlay";

function Motivator() {
  const [openedModal, setOpenedModal] = useState(false);

  const [goalInserted, setGoalInserted] = useState("");
  const [deadlineInserted, setDeadlineInserted] = useState("");

  const [goalDefaultStyle, setGoalDefaultStyle] = useState({});
  const [deadlineDefaultStyle, setDeadlineDefaultState] = useState({});

  const [btnStyle, setBtnStyle] = useState("submit-btn");

  const [id, setId] = useState(0);

  const opener = function (e) {
    setId(e.target.getAttribute("itemid"));
    setOpenedModal(true);
    setGoalInserted("");
    setDeadlineInserted("");
    setGoalDefaultStyle({});
    setDeadlineDefaultState({});
    setBtnStyle("submit-btn");
  };

  const closer = function () {
    setOpenedModal(false);
    setGoalDefaultStyle({});
    setDeadlineDefaultState({});
    setGoalInserted("");
    setDeadlineInserted("");
  };

  let goalListener = function (e) {
    setGoalInserted(e.target.value);
    if (e.target.value.length != 0) {
      setGoalDefaultStyle({});
    }
  };

  let deadlineListener = function (e) {
    setDeadlineInserted(e.target.value);
    if (e.target.value.length != 0) {
      setDeadlineDefaultState({});
    }
  };

  const backgrounder = function () {
    if (goalInserted.length == 0 && deadlineInserted.length == 0) {
      setGoalDefaultStyle({ background: "#a1f7d3" });
      setDeadlineDefaultState({ background: "#a1f7d3" });
      setBtnStyle("submit-btn");
    }
    if (goalInserted.length == 0) {
      setGoalDefaultStyle({ background: "#a1f7d3" });
    }
    if (deadlineInserted.length == 0) {
      setDeadlineDefaultState({ background: "#a1f7d3" });
    }
  };

  const testF = function () {
    if (goalInserted.length > 1 && deadlineInserted.length > 1) {
      setBtnStyle("submit-btn valid-btn");
      setGoalDefaultStyle({});
    }
    if (goalInserted.length == 0) {
      setBtnStyle("submit-btn");
    }
    if (deadlineInserted.length == 0) {
      setBtnStyle("submit-btn");
    }
  };

  useEffect(testF, [goalInserted]);
  useEffect(testF, [deadlineInserted]);

  const [deadlineEntered, setDeadlineEntered] = useState();

  const goalInputRef = useRef();
  const deadlineInputRef = useRef();

  const [newGoal, setNewGoal] = useState("");

  const [reasonsObjArr, setReasonsObjArr] = useState([
    [
      {
        goal: "Career change",
        action: "Link below",
        id: 111,
      },
    ],
    [
      {
        goal: "Leave Sykes",
        action: "This job is a horror and I deserve something better",
        id: 222,
      },
      {
        goal: "Flexibility",
        action: "Being able to work from everywhere",
        id: 0.7419944123444685,
      },
      {
        goal: "Money",
        action: "Have a good salary to invest on myself and my projects",
        id: 0.7434563456323444321,
      },
      {
        goal: "Leave alone",
        action: "Having a partner is a pain in the ass",
        id: 0.74199463456435654321,
      },
      {
        goal: "Start with next goals",
        action: "Techno, studio, Tot Fosk, Drums",
        id: 0.74199345634564321,
      },
      {
        goal: "Stop studying",
        action: "Kind of a retro but true",
        id: 0.7419944123445679,
      },
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ]);

  const [componentData, setComponentData] = useState([
    {
      dataTunnel: reasonsObjArr[0],
      title: "porfolio",
      deadline: "2023-06-07",
      id: 47128749174,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
    {
      dataTunnel: reasonsObjArr[1],
      title: "career change",
      deadline: "2023-06-07",
      id: 574325798320475,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
    {
      dataTunnel: reasonsObjArr[2],
      title: "not drinking alcohol",
      deadline: "2023-06-07",
      id: 43572938047592345,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
    {
      dataTunnel: reasonsObjArr[3],
      title: "Muay Thai performance",
      deadline: "2023-06-07",
      id: 23457293047592345,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
    {
      dataTunnel: reasonsObjArr[4],
      title: "not drinking coffee",
      deadline: "2023-06-07",
      id: 523452384750235,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
    {
      dataTunnel: reasonsObjArr[5],
      title: "learning german",
      deadline: "2023-06-07",
      id: 54534582234523495807,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
    {
      dataTunnel: reasonsObjArr[6],
      title: "going to the office",
      deadline: "2023-06-07",
      id: 523452345702375492,
      get diffDays() {
        let date1 = new Date(this.deadline);
        let today = new Date();
        let diffTime = Math.abs(today - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
      },
    },
  ]);

  const [mutation, setMutation] = useState();

  const submitHandler = function () {
    let indexOfId = componentData.findIndex((x) => x.id == id);
    let goalEntered = goalInputRef.current.value;
    let deadlineEntered = deadlineInputRef.current.value;
    backgrounder();
    componentData[indexOfId].title = goalEntered;
    componentData[indexOfId].deadline = deadlineEntered;
    setComponentData(componentData);
    closer();
  };

  const dummy = [
    {
      goal: "Career change",
      action: "Link below",
      id: 0.7419944699444685,
    },
  ];

  const keyPusher = function (e) {
    if (e.code == "Enter") {
      console.log("enter has been pressed");
      submitHandler();
    }
  };

  return (
    <GenericWrapper>
      <Overlay
        statusTunnel={openedModal}
        statusTunnel2={openedModal}
        closerTunnel={closer}
      ></Overlay>
      <Header
        altBtn1={TodoBtn}
        altBtn2={ForumBtn}
        altBtn3={WarmerBtn}
        altBtn4={AboutButton}
        altBtn5={DummyBtn}
      ></Header>
      <h2>Welcome to the MOTIVATOR</h2>
      <h3>A system to remind you why you are doing what you are doing</h3>
      <main className="main-profile-container">
        {componentData.map((x) => (
          <MotiTable
            dataTunnel={x.dataTunnel}
            title={x.title}
            deadline={x.deadline}
            openerTunnel={opener}
            idTunnel={x.id}
            daysRemainingTunnel={x.diffDays}
          ></MotiTable>
        ))}
      </main>
      <NewBtn addFTunnel={""}></NewBtn>
      <LogOutBtn></LogOutBtn>
      <Footer></Footer>
      <EditorModal
        statusTunnel={openedModal}
        goalDefaultStyleTunnel={goalDefaultStyle}
        goalLiTunnel={goalListener}
        goalInputRefTunnel={goalInputRef}
        valueTunnel={goalInserted}
        value2Tunnel={deadlineInserted}
        deadlineDefaultStyleTunnel={deadlineDefaultStyle}
        deadlineLiTunnel={deadlineListener}
        deadlineInputRefTunnel={deadlineInputRef}
        clickerTunnel={submitHandler}
        btnStyleTunnel={btnStyle}
        keyPusherTunnel={keyPusher}
      ></EditorModal>
    </GenericWrapper>
  );
}

export default Motivator;

/*
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

        */
