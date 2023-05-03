import React, { useEffect, useState } from "react";
import "./TestPage.css";

function TestPage() {
  const [test, setTest] = useState([111, 222, 333, 444, 555]);
  console.log(test);
  test[0] = 999;
  console.log(test);

  return (
    <div className="testcont">
      <img src={require("../../img/test1.webp")} alt="this is just a test" />{" "}
      <div>asdf asdf asdf as jasldfj alsdjf lkasjdf lkajsdklf jasldñkf jlasñdfj l</div>
    </div>
  );
}

export default TestPage;

// the f works but setValue is not updating anything
