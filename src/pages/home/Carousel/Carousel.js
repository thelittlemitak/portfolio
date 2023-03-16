import React, { useState } from "react";
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

function Carousel() {
  const pic1 = <Picture1></Picture1>;
  const pic2 = <Picture2></Picture2>;
  const pic3 = <Picture3></Picture3>;
  const pic4 = <Picture4></Picture4>;

  
  const pictures = [
    pic1,
    pic2,
    pic3,
    pic4,
  ];

  const arrayEl2 = [
    <BlockQuote1></BlockQuote1>,
    <BlockQuote2></BlockQuote2>,
    <BlockQuote3></BlockQuote3>,
    <BlockQuote4></BlockQuote4>,
  ];

  const selectedDot = <SelectedDot></SelectedDot>;
  const unSelectedDot = <UnselectedDot></UnselectedDot>;

  const dotChances = [
    [selectedDot, unSelectedDot, unSelectedDot, unSelectedDot],
    [unSelectedDot, selectedDot, unSelectedDot, unSelectedDot],
    [unSelectedDot, unSelectedDot, selectedDot, unSelectedDot],
    [unSelectedDot, unSelectedDot, unSelectedDot, selectedDot],
  ];

  let [dots, setDots] = useState(dotChances[0]);

  let [currentPos, setCurrentPos] = useState(0);

  const adder = function () {
    setCurrentPos(currentPos + 1);
  };

  const subtractor = function () {
    setCurrentPos(currentPos - 1);
  };

  const rightBtnPlus = function () {
    if (currentPos === 0) {
      adder();
      setDots(dotChances[1]);
    } else if (currentPos === 1) {
      adder();
      setDots(dotChances[2]);
    } else if (currentPos === 2) {
      adder();
      setDots(dotChances[3]);
    }
  };

  const leftBtnMinus = function () {
    if (currentPos === 3) {
      subtractor();
      setDots(dotChances[2]);
    } else if (currentPos === 2) {
      subtractor();
      setDots(dotChances[1]);
    } else if (currentPos === 1) {
      subtractor();
      setDots(dotChances[0]);
    }
  };

  const secondF = function () {
    console.log("this works too");
  };

  return (
    <div>
      <div className="carousel-container">
        {pictures[currentPos]}
        {arrayEl2[currentPos]}
        <button
          className="carousel-button carousel-button-left"
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
          className="carousel-button carousel-button-right"
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

export default Carousel;
