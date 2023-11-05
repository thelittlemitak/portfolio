import { Link } from "react-router-dom";

function MotivatorBtn() {
  return (
    <Link className="main-header-buttons" to="/portfolio/motivator">
      {" "}
      <strong>MOTIVATOR</strong>
    </Link>
  );
}

export default MotivatorBtn;
