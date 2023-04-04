import React, { useState } from "react";

import Footer from "../../components/Footer";
import ReadyButton from "../../components/btns/ReadyButton";
import CarouselDots from "./carousel/CarouselDots";
import Carousel from "./carousel/Carousel";
import HowToLists from "./HowToLists";
import ArrowDown from "../../components/ArrowDown";
import PostHeroTitle from "./PostHeroTitle";
import ImagesCont from "./ImagesCont";
import HeroBelowSection from "../../components/HeroBelowSection";
import Hero from "./Hero";
import Header from "../../components/Header";
import MainWrapper from "./MainWrapper";
import "./HomeQueries.css";
import AboutButton from "../../components/btns/AboutButton";
import ContactButton from "../../components/btns/ContactButton";
import LoginBtn from "../../components/btns/LoginBtn";
import SignUpBtn from "../../components/btns/SignUpBtn";
import LoginModal from "./login_modals/LoginModal";
import SignUpModal from "./login_modals/SignUpModal";
import Overlay from "../../components/Overlay";
import DummyBtn from "../../components/btns/DummyBtn";

function Home() {
  const loginBtn = <LoginBtn></LoginBtn>;
  const signUpBtn = <SignUpBtn></SignUpBtn>;
  const dummyBtn = <DummyBtn></DummyBtn>;

  const [openedModal1, setOpenedModal1] = useState(false);
  const [openedModal2, setOpenedModal2] = useState(false);

  const opener1 = function () {
    setOpenedModal1(true);
  };

  const opener2 = function () {
    setOpenedModal2(true);
  };

  const closer = function () {
    setOpenedModal1(false);
    setOpenedModal2(false);
  };

  const changerToLogin = function () {
    console.log("this works")
    setOpenedModal1(true);
    setOpenedModal2(false);
  }

  const changerToSignUp = function () {
    console.log("this works")
    setOpenedModal1(false);
    setOpenedModal2(true);
  }

  return (
    <div>
      <Overlay
        statusTunnel={openedModal1}
        statusTunnel2={openedModal2}
        closerTunnel={closer}
      ></Overlay>
      <Header
        altBtn1={LoginBtn}
        altBtn2={SignUpBtn}
        altBtn3={DummyBtn}
        altBtn4={AboutButton}
        openedTunnel1={opener1}
        openedTunnel2={opener2}
      ></Header>
      <MainWrapper>
        <Hero></Hero>
        <HeroBelowSection></HeroBelowSection>
        <ImagesCont></ImagesCont>
        <PostHeroTitle></PostHeroTitle>
        <ArrowDown></ArrowDown>
        <HowToLists></HowToLists>
        <Carousel></Carousel>
        <ReadyButton openedTunnel={opener2}></ReadyButton>
        <Footer></Footer>
        <LoginModal statusTunnel={openedModal1} changerTunnel={changerToSignUp}></LoginModal>
        <SignUpModal statusTunnel={openedModal2} changerTunnel={changerToLogin}></SignUpModal>
      </MainWrapper>
    </div>
  );
}

export default Home;
