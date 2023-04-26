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
import "../MediaQueries.css";
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
import Carousel2 from "./carousel/Carousel2";

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
    setKeeper(false);
  };

  const opener2 = function () {
    setOpenedModal2(true);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
    setKeeper(false);
  };

  const closer = function () {
    setOpenedModal1(false);
    setOpenedModal2(false);
    setUserDefaultStyle({});
    setPwDefaultState({});
    setEmailInserted("");
    setPwInserted("");
    setKeeper(false);
  };

  const changerToLogin = function () {
    setOpenedModal1(true);
    setOpenedModal2(false);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
    setKeeper(false);
  };

  const changerToSignUp = function () {
    setOpenedModal1(false);
    setOpenedModal2(true);
    setEmailInserted("");
    setPwInserted("");
    setUserDefaultStyle({});
    setPwDefaultState({});
    setBtnStyle("submit-btn");
    setKeeper(false);
  };

  let userListener = function (e) {
    setEmailInserted(e.target.value);
    if (e.target.value.length != 0) {
      setUserDefaultStyle({});
    }
  };

  let pwListener = function (e) {
    setPwInserted(e.target.value);
    if (e.target.value.length != 0) {
      setPwDefaultState({});
    }
  };

  const [signUpAlertStyle, setSignUpAlertStyle] = useState(
    "wrong-alert hidden-alert"
  );

  const testF = function () {
    if (emailInserted.length > 1 && pwInserted.length > 1) {
      setBtnStyle("submit-btn valid-btn");
      setPwDefaultState({});
      setAlertStyle("wrong-alert hidden-alert");
      setSignUpAlertStyle("wrong-alert hidden-alert");
    }
    if (pwInserted.length == 0) {
      setBtnStyle("submit-btn");
    }
    if (emailInserted.length == 0) {
      setBtnStyle("submit-btn");
    }
  };

  useEffect(testF, [emailInserted]);
  useEffect(testF, [pwInserted]);

  const [userEntered, setUserEntered] = useState();
  const [pwEntered, setPwEntered] = useState();

  // console.log(emailInserted);
  // console.log(pwInserted);

  const backgrounder = function () {
    if (emailInserted.length == 0 && pwInserted.length == 0) {
      // console.log("both user and pw are empty");
      setUserDefaultStyle({ background: "#a1f7d3" });
      setPwDefaultState({ background: "#a1f7d3" });
      setBtnStyle("submit-btn");
    }
    if (emailInserted.length == 0) {
      // console.log("only user is empty");
      setUserDefaultStyle({ background: "#a1f7d3" });
    }
    if (pwInserted.length == 0) {
      // console.log("only pw is empty");
      setPwDefaultState({ background: "#a1f7d3" });
    }
  };

  const submitHandler = function () {
    backgrounder();
    setUserEntered(userInputRef.current.value);
    setPwEntered(pwInputRef.current.value);
    if (userEntered != "123" || pwEntered != "123") {
      setAlertStyle("wrong-alert");
    }
  };

  const navigate = useNavigate();
  const [dummyVar, setDummyVar] = useState("");
  const [keeper, setKeeper] = useState(false); //keeper was created to keep cx logged in when clicking a checkbox in the modal window
  const [alertStyle, setAlertStyle] = useState("wrong-alert hidden-alert");

  const checkboxLi = function (e) {
    if (e.target.checked == true) {
      setKeeper(true);
    } else if (e.target.checked == false) setKeeper(false);
  };

  if (userEntered == "123" && pwEntered == "123") {
    navigate("/profile");
    sessionStorage.setItem("isLoggedIn", "yes");
    sessionStorage.setItem("user", "recruiter");
    if (keeper == true) {
      localStorage.setItem("isLoggedIn", "yes");
      localStorage.setItem("user", "recruiter");
    }
  }
  // } else if (localStorage.getItem("isLoggedIn") == "yes") {
  //   console.log("someone is logged in");
  // }

  const userLogged = "recruiter";

  const signUpErroer = function (e) {
    backgrounder();
    e.preventDefault();
    setSignUpAlertStyle("wrong-alert");
    // console.log(e);
    // console.log("trying to signup");
  };

  const keyPusher = function (e) {
    if (e.code == "Enter") {
      // console.log("enter has been pressed");
      submitHandler();
    }
  };

  const [styleLeft, setStyleLeft] = useState(
    "how-to-lists-container left-card"
  );
  const [styleRight, setStyleRight] = useState(
    "how-to-lists-container right-card"
  );
  const arrowRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log("it is intersecting");
        setStyleLeft("how-to-lists-container appearanceCardHomeClass");
        setStyleRight("how-to-lists-container appearanceCardHomeClass");
      }
    });
    observer.observe(arrowRef.current);
  }, []);

  return (
    <div>
      <Overlay
        statusTunnel={openedModal1}
        statusTunnel2={openedModal2}
        closerTunnel={closer}
      ></Overlay>
      <Header
        altBtn1={
          localStorage.getItem("isLoggedIn") ||
          sessionStorage.getItem("isLoggedIn") == "yes"
            ? DummyBtn
            : LoginBtn
        }
        altBtn2={
          localStorage.getItem("isLoggedIn") ||
          sessionStorage.getItem("isLoggedIn") == "yes"
            ? DummyBtn
            : SignUpBtn
        }
        altBtn3={
          localStorage.getItem("isLoggedIn") ||
          sessionStorage.getItem("isLoggedIn") == "yes"
            ? DummyBtn
            : DummyBtn
        }
        altBtn4={AboutButton}
        altBtn5={
          localStorage.getItem("isLoggedIn") ||
          sessionStorage.getItem("isLoggedIn") == "yes"
            ? ProfileBtn
            : DummyBtn
        }
        saluteTextTunnel={
          localStorage.getItem("isLoggedIn") ||
          sessionStorage.getItem("isLoggedIn") == "yes"
            ? "logged in as "
            : ""
        }
        userNameTunnel={
          localStorage.getItem("user") ||
          sessionStorage.getItem("user") == "recruiter"
            ? "recruiter"
            : ""
        }
        openedTunnel1={opener1}
        openedTunnel2={opener2}
        saluteStyleTunnel={
          localStorage.getItem("isLoggedIn") ||
          sessionStorage.getItem("isLoggedIn") == "yes"
          ? "salute-wrapper"
          : "salute-wrapper display-none"
        }
      ></Header>
      <MainWrapper>
        <Hero></Hero>
        <HeroBelowSection></HeroBelowSection>
        <ImagesCont></ImagesCont>
        <PostHeroTitle></PostHeroTitle>
        <ArrowDown refTunnel={arrowRef}></ArrowDown>
        <HowToLists
          styleLeftTunnel={styleLeft}
          styleRightTunnel={styleRight}
        ></HowToLists>
        <Carousel2></Carousel2>
        <ReadyButton openedTunnel={opener1}></ReadyButton>
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
          checkboxLiTunnel={checkboxLi}
          alertStyleTunnel={alertStyle}
          keyPusherTunnel={keyPusher}
        ></LoginModal>
        <SignUpModal
          statusTunnel={openedModal2}
          changerTunnel={changerToLogin}
          clickerTunnel={signUpErroer}
          userLiTunnel={userListener}
          pwLiTunnel={pwListener}
          userDefaultStyleTunnel={userDefaultStyle}
          pwDefaultStyleTunnel={pwDefaultStyle}
          btnStyleTunnel={btnStyle}
          alertStyleTunnel={signUpAlertStyle}
        ></SignUpModal>
      </MainWrapper>
    </div>
  );
}

export default Home;
