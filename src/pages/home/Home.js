import React, { useState, useRef, useEffect } from "react";

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
import ProfileBtn from "../../components/btns/ProfileBtn";
import LoginModal from "./login_modals/LoginModal";
import SignUpModal from "./login_modals/SignUpModal";
import Overlay from "../../components/Overlay";
import DummyBtn from "../../components/btns/DummyBtn";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const signUpBtn = SignUpBtn;
  const dummyBtn = DummyBtn;

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
    console.log("user Li works");
  };

  let pwListener = function (e) {
    setPwInserted(e.target.value);
    console.log("pw Li works");
  };

  console.log(emailInserted);
  console.log(pwInserted);

  const testF = function () {
    if (emailInserted.length > 1 && pwInserted.length > 1) {
      console.log("this works now");
      setBtnStyle("submit-btn valid-btn");
    }
    if (pwInserted.length == 0) {
      setPwDefaultState({});
      setBtnStyle("submit-btn");
    }
    if (emailInserted.length == 0) {
      setUserDefaultStyle({});
      setBtnStyle("submit-btn");
    }
  };

  useEffect(testF, [emailInserted]);
  useEffect(testF, [pwInserted]);

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

  const navigate = useNavigate();
  const [dummyVar, setDummyVar] = useState("");

  if (userEntered == "123" && pwEntered == "123") {
    navigate("/profile");
    localStorage.setItem("isLoggedIn", "yes");
    localStorage.setItem("user", "recruiter");
  }

  if (localStorage.getItem("isLoggedIn") == "yes") {
    console.log("someone is logged in");
  }

  const userLogged = "recruiter";

  return (
    <div>
      <Overlay
        statusTunnel={openedModal1}
        statusTunnel2={openedModal2}
        closerTunnel={closer}
      ></Overlay>
      <Header
        altBtn1={
          localStorage.getItem("isLoggedIn") == "yes" ? DummyBtn : LoginBtn
        }
        altBtn2={
          localStorage.getItem("isLoggedIn") == "yes" ? DummyBtn : SignUpBtn
        }
        altBtn3={
          localStorage.getItem("isLoggedIn") == "yes" ? DummyBtn : DummyBtn
        }
        altBtn4={AboutButton}
        altBtn5={
          localStorage.getItem("isLoggedIn") == "yes" ? ProfileBtn : DummyBtn
        }
        saluteTextTunnel={
          localStorage.getItem("isLoggedIn") == "yes" ? "logged in as " : ""
        }
        userNameTunnel={
          localStorage.getItem("user") == "recruiter" ? "recruiter" : ""
        }
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
          valueTunnel={emailInserted}
          value2Tunnel={pwInserted}
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
