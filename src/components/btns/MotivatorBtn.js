import { Link } from "react-router-dom";

function MotivatorBtn() {
  return (
    <Link className="main-header-buttons" to="/motivator">
      {" "}
      <strong>MOTIVATOR</strong>
    </Link>
  );
}

export default MotivatorBtn;
