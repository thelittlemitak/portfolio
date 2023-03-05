import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainWrapper from "./MainWrapper";
import TopicCard from "./TopicCard";
import AboutButton from "../../components/AboutButton";
import ContactButton from "../../components/ContactButton";

function Forum() {
  const data = [{ goal: "Meditate" }, { goal: "Exercise" }, { goal: "Study" }];
  const userID = [{ name: "Jose" }, { name: "Rosa" }, { name: "Neus" }];
  
  const aboutBtn = AboutButton;
  const contactBtn = ContactButton;

  return (
    <div>

    <Header altBtn={aboutBtn}></Header>
    <MainWrapper class="forum-container">
        <TopicCard goal={data[0].goal} userID={userID[0].name}></TopicCard>
        <TopicCard goal={data[1].goal}></TopicCard>
        <TopicCard goal={data[2].goal}></TopicCard>
      </MainWrapper>
      <Footer></Footer>
    </div>
  );
}

export default Forum;

// ! I DON'T KNOW HOW TO PASS MULTIPLE USER IDS TO THE SMALLEST COMPONENT