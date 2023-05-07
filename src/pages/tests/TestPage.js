import React, { useEffect, useState } from "react";
import "./TestPage.css";

function TestPage() {
  const [test, setTest] = useState([111, 222, 333, 444, 555]);
  console.log(test);
  test[0] = 999;
  console.log(test);

  return (
    <div className="testcont">
      <div className="testcont2">
        {" "}
        <input />
      </div>
    </div>
  );
}

export default TestPage;

// the f works but setValue is not updating anything
