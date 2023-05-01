import "./ScalingAlert.css";

function ScalingAlert(props) {
  return (
    <div className={props.styleTunnel}>
      <div className="letter-container">
        {" "}
        <div className="t1">{props.lt1}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t2">{props.lt2}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t3">{props.lt3}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t4">{props.lt4}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t5">{props.lt5}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t6">{props.lt6}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t7">{props.lt7}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t8">{props.lt8}</div>
      </div>
      <div className="letter-container">
        {" "}
        <div className="t9">{props.lt9}</div>
      </div>
      <div className="dot-container">
        <div className="dot d1">.</div>
        <div className="dot d2">.</div>
        <div className="dot d3">.</div>
        <div className="dot d4">.</div>
        <div className="dot d5">.</div>
        <div className="dot d6">.</div>
        <div className="dot d7">.</div>
        <div className="dot d8">.</div>
        {/* <div className="dot d9">.</div> */}


      </div>
    </div>
  );
}

export default ScalingAlert;
