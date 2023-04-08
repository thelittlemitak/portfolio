import React, { useState, useRef } from "react";

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

  const [userDefaultStyle, setUserDefaultStyle] = useState({});
  const [pwDefaultStyle, setPwDefaultState] = useState({});

  const [emailInserted, setEmailInserted] = useState("");
  const [pwInserted, setPwInserted] = useState("");

  const [btnStyle, setBtnStyle] = useState("submit-btn");

  const userInputRef = useRef();
  const pwInputRef = useRef();

  const opener1 = function () {
    setOpenedModal1(true);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
  };

  const opener2 = function () {
    setOpenedModal2(true);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
  };

  const closer = function () {
    setOpenedModal1(false);
    setOpenedModal2(false);
    setUserDefaultStyle({});
    setPwDefaultState({});
    setEmailInserted("");
    setPwInserted("");
  };

  const changerToLogin = function () {
    setOpenedModal1(true);
    setOpenedModal2(false);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
  };

  const changerToSignUp = function () {
    setOpenedModal1(false);
    setOpenedModal2(true);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
  };

  let userListener = function (e) {
    setEmailInserted(e.target.value);
    if (emailInserted.length == 0) {
      setUserDefaultStyle({});
    }
    if (emailInserted.length == 1) {
      setBtnStyle("submit-btn");
    }
    if (emailInserted.length > 1 && pwInserted.length > 1) {
      setBtnStyle("submit-btn valid-btn");
    }
  };

  let pwListener = function (e) {
    setPwInserted(e.target.value);
    if (pwInserted.length == 0) {
      setPwDefaultState({});
      setBtnStyle("submit-btn");
    }
    if (pwInserted.length == 1) {
      setBtnStyle("submit-btn");
    }
    if (emailInserted.length > 1 && pwInserted.length > 1) {
      setBtnStyle("submit-btn valid-btn");
    }
  };

  const [userEntered, setUserEntered] = useState();
  const [pwEntered, setPwEntered] = useState();

  const submitHandler = function () {
    if (emailInserted.length == 0 && pwInserted.length == 0) {
      setUserDefaultStyle({ background: "#a1f7d3" });
      setPwDefaultState({ background: "#a1f7d3" });
      setBtnStyle("submit-btn");
    }
    if (emailInserted.length == 0) {
      setUserDefaultStyle({ background: "#a1f7d3" });
    }
    if (pwInserted.length == 0) {
      setPwDefaultState({ background: "#a1f7d3" });
    }
    setUserEntered(userInputRef.current.value);
    setPwEntered(pwInputRef.current.value);
  };

  console.log(userEntered);
  console.log(pwEntered);

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
        <LoginModal
          statusTunnel={openedModal1}
          changerTunnel={changerToSignUp}
          clickerTunnel={submitHandler}
          userLiTunnel={userListener}
          pwLiTunnel={pwListener}
          userDefaultStyleTunnel={userDefaultStyle}
          pwDefaultStyleTunnel={pwDefaultStyle}
          btnStyleTunnel={btnStyle}
          userInputRefTunnel={userInputRef}
          pwInputRefTunnel={pwInputRef}
          submissionTunnel={submitHandler}
        ></LoginModal>
        <SignUpModal
          statusTunnel={openedModal2}
          changerTunnel={changerToLogin}
          clickerTunnel={submitHandler}
          userLiTunnel={userListener}
          pwLiTunnel={pwListener}
          userDefaultStyleTunnel={userDefaultStyle}
          pwDefaultStyleTunnel={pwDefaultStyle}
          btnStyleTunnel={btnStyle}
        ></SignUpModal>
      </MainWrapper>
    </div>
  );
}

export default Home;
