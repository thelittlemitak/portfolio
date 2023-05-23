import React, { useState, useLayoutEffect, useEffect } from "react";
import "./Carousel.css";
import Picture1 from "./Picture1";
import Picture2 from "./Picture2";
import Picture3 from "./Picture3";
import Picture4 from "./Picture4";
import BlockQuote1 from "./BlockQuote1";
import BlockQuote2 from "./BlockQuote2";
import BlockQuote3 from "./BlockQuote3";
import BlockQuote4 from "./BlockQuote4";
import SelectedDot from "./SelectedDot";
import UnselectedDot from "./UnselectedDot";
import Pictures from "./Pictures";

function Carousel2() {
  const arrayEl2 = [
    <BlockQuote1></BlockQuote1>,
    <BlockQuote2></BlockQuote2>,
    <BlockQuote3></BlockQuote3>,
    <BlockQuote4></BlockQuote4>,
  ];

  const dotHandler = function (e) {
    let idPressed = e.target.id;
    if (idPressed == "id1") {
      console.log("you pressed 1");
      setDots(dotChances[0]);
      setCurrentPos(0);
      setLeftBtnStatus("hide-btn");
      setRightBtnStatus("");
    } else if (idPressed == "id2") {
      console.log("you pressed 2");
      setDots(dotChances[1]);
      setCurrentPos(1);
      setLeftBtnStatus("");
      setRightBtnStatus("");
    } else if (idPressed == "id3") {
      console.log("you pressed 3");
      setDots(dotChances[2]);
      setCurrentPos(2);
      setLeftBtnStatus("");
      setRightBtnStatus("");
    } else if (idPressed == "id4") {
      console.log("you pressed 4");
      setDots(dotChances[3]);
      setCurrentPos(3);
      setLeftBtnStatus("");
      setRightBtnStatus("hide-btn");
    }
  };

  const selectedDot = <SelectedDot></SelectedDot>;
  const unSelectedDot1 = (
    <UnselectedDot
      dotHandlerTunnel={dotHandler}
      idTunnel={"id1"}
    ></UnselectedDot>
  );
  const unSelectedDot2 = (
    <UnselectedDot
      dotHandlerTunnel={dotHandler}
      idTunnel={"id2"}
    ></UnselectedDot>
  );
  const unSelectedDot3 = (
    <UnselectedDot
      dotHandlerTunnel={dotHandler}
      idTunnel={"id3"}
    ></UnselectedDot>
  );
  const unSelectedDot4 = (
    <UnselectedDot
      dotHandlerTunnel={dotHandler}
      idTunnel={"id4"}
    ></UnselectedDot>
  );

  const dotChances = [
    [selectedDot, unSelectedDot2, unSelectedDot3, unSelectedDot4],
    [unSelectedDot1, selectedDot, unSelectedDot3, unSelectedDot4],
    [unSelectedDot1, unSelectedDot2, selectedDot, unSelectedDot4],
    [unSelectedDot1, unSelectedDot2, unSelectedDot3, selectedDot],
  ];

  let [dots, setDots] = useState(dotChances[0]);

  let [currentPos, setCurrentPos] = useState(0);

  const adder = function () {
    setCurrentPos(currentPos + 1);
  };

  const subtractor = function () {
    setCurrentPos(currentPos - 1);
  };

  let [leftBtnStatus, setLeftBtnStatus] = useState("hide-btn");
  let [rightBtnStatus, setRightBtnStatus] = useState("");

  const rightBtnPlus = function () {
    if (currentPos === 0) {
      adder();
      setDots(dotChances[1]);
      setLeftBtnStatus("");
    } else if (currentPos === 1) {
      adder();
      setDots(dotChances[2]);
    } else if (currentPos === 2) {
      adder();
      setDots(dotChances[3]);
      setRightBtnStatus("hide-btn");
    }
  };

  const leftBtnMinus = function () {
    if (currentPos === 3) {
      subtractor();
      setDots(dotChances[2]);
      setRightBtnStatus("");
    } else if (currentPos === 2) {
      subtractor();
      setDots(dotChances[1]);
    } else if (currentPos === 1) {
      subtractor();
      setDots(dotChances[0]);
      setLeftBtnStatus("hide-btn");
    }
  };

  const secondF = function () {
    // console.log("this works too");
  };

  return (
    <div>
      <div className="carousel-container">
        <Pictures currentPosTunnel={currentPos}></Pictures>
        {arrayEl2[currentPos]}
        <button
          // className="carousel-button carousel-button-left"
          className={`carousel-button carousel-button-left ${leftBtnStatus}`}
          aria-label="previous testimonal"
          onClick={leftBtnMinus}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className={`carousel-button carousel-button-right ${rightBtnStatus}`}
          aria-label="next testimonal"
          onClick={rightBtnPlus}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="carousel-dots-container">{dots}</div>
    </div>
  );
}

export default Carousel2;
