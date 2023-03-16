import React, { useState } from "react";

function TestPage() {
  const data = [{ goal: "First value" }];

  const [el, setValue] = useState(<div>holi</div>);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  
  let formatedDate = day + "." + month + "." + year;

  function change() {
    setValue("new var");
    console.log(setValue);
  }

  return (
    <div>
      <button onClick={change}>{el}</button>
      <div>{minutes}</div>
    </div>
  );
}

export default TestPage;

// the f works but setValue is not updating anything
