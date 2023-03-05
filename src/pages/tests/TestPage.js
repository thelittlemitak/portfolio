import React, { useState } from "react";

function TestPage() {
  const data = [{ goal: "First value" }];

  const [el, setValue] = useState(<div>holi</div>);

  function change() {
    setValue("new var");
    console.log(setValue)
  }

  return <button onClick={change}>{el}</button>;
}

export default TestPage;

// the f works but setValue is not updating anything