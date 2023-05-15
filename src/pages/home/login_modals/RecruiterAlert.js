import "./RecruiterAlert.css";
import { useState } from "react";

function RecruiterAlert() {
  const [alertStyle, setAlertStyle] = useState("rec-alert--hidden");
  const [alertStyle2, setAlertStyle2] = useState("rec-alert-msg");
  const [alertStyle3, setAlertStyle3] = useState("rec-alert-wrapper");

  const styler = function () {
    setAlertStyle("rec-alert--hidden opened");
    setAlertStyle2("rec-alert-msg lost");
    setAlertStyle3("rec-alert-wrapper colored");
  };

  return (
    <div className={alertStyle3} onClick={styler}>
      <div className={alertStyle2}>I am a recruiter</div>
      <div className={alertStyle}>
        <p>
          user: <strong>recruiter</strong>
        </p>
        <p>
          pw: <strong>123asd</strong>
        </p>
      </div>
    </div>
  );
}

export default RecruiterAlert;
