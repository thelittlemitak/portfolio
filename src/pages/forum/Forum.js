import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainWrapper from "./components/MainWrapper";
import GoalCard from "./components/GoalCard";
import AboutButton from "../../components/btns/AboutButton";
import ContactButton from "../../components/btns/ContactButton";
import SignUpBtn from "../../components/btns/SignUpBtn";
import LoginBtn from "../../components/btns/LoginBtn";
import TodoBtn from "../../components/btns/TodoBtn";
import MotivatorBtn from "../../components/btns/MotivatorBtn";
import WarmerBtn from "../../components/btns/WarmerBtn";
import DummyBtn from "../../components/btns/DummyBtn";
import LogOutBtn from "../../components/btns/LogOutBtn";

function Forum() {
  const forumData = [
    {
      goal: "Meditate",
      chatLine: [
        {
          user: "Jose",
          time: "12:20h, 11.02.2023",
          message: "Does anyone know a good book about the topic?",
          id: 0.2215648439284433,
        },
        {
          user: "Fina",
          time: "13:22h, 12.02.2023",
          message: "Yes but I need to search for them",
          id: 0.2215657687284433,
        },
      ],
      id: 999,
      lastpost: { user: "Fina", time: "13:22h, 12.02.2023" },
    },
    {
      goal: "Exercise",
      chatLine: [
        {
          user: "María",
          time: "11:10h, 14.02.2023",
          message: "I'm too tired of training too much",
          id: 0.5768748439284433,
        },
        {
          user: "LaCamella",
          time: "11:30h, 17.02.2023",
          message: "Better try going slow with this",
          id: 0.8888848439284433,
        },
      ],
      id: 998,
      lastpost: { user: "LaCamella", time: "11:30h, 17.02.2023" },
    },
  ];

  return (
    <div>
      <Header
        altBtn1={TodoBtn}
        altBtn2={MotivatorBtn}
        altBtn3={WarmerBtn}
        altBtn4={DummyBtn}
        altBtn5={DummyBtn}
        saluteStyleTunnel={"salute-wrapper display-none"}
      ></Header>
      <h2 className="h2-profile">FORUM</h2>
      <h3 className="h2-h3-profile margin-bottom">
        A thread for each goal that you share with others
      </h3>
      <MainWrapper class="forum-container">
        {forumData.map((x) => (
          <GoalCard
            goalTunnel={x.goal}
            chatLineTunnel={x.chatLine}
            key={x.id}
            lastPostTunnel={x.lastpost}
          ></GoalCard>
        ))}
      </MainWrapper>
      <LogOutBtn></LogOutBtn>
      <Footer></Footer>
    </div>
  );
}

export default Forum;
