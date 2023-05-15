import "./RecruiterAlert.css";
import { useState, useEffect } from "react";

function RecruiterAlert() {
  const [alertStyle, setAlertStyle] = useState("rec-alert--hidden");
  const [alertStyle2, setAlertStyle2] = useState("rec-alert-msg");
  const [alertStyle3, setAlertStyle3] = useState("rec-alert-wrapper");
  const [alertStyle41, setAlertStyle41] = useState("rec-alert-flex");
  const [alertStyle42, setAlertStyle42] = useState("rec-alert-flex");

  const styler = function () {
    setAlertStyle("rec-alert--hidden opened");
    setAlertStyle2("rec-alert-msg lost");
    setAlertStyle3("rec-alert-wrapper colored");
  };

  const copyer1 = function () {
    setAlertStyle41("rec-alert-flex copied");
    setTimeout(() => setAlertStyle41("rec-alert-flex"), 3100);
    navigator.clipboard.writeText("recruiter")
  };

  const copyer2 = function () {
    setAlertStyle42("rec-alert-flex copied");
    setTimeout(() => setAlertStyle42("rec-alert-flex"), 3100);
    navigator.clipboard.writeText("123asdXX")

  };

  return (
    <div className={alertStyle3} onClick={styler}>
      <div className={alertStyle2}>I am a recruiter</div>
      <div className={alertStyle}>
        <p className={alertStyle41}>
          <div>
            {" "}
            user: <strong>recruiter</strong>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            onClick={copyer1}
            className="savage"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
            />
          </svg>
        </p>
        <p className={alertStyle42}>
          <div>
            pwd: <strong>123asdXX</strong>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            onClick={copyer2}
            className="savage"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default RecruiterAlert;
