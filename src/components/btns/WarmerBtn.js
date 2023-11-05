import { Link } from "react-router-dom";

function WarmerBtn() {
  return (
    <Link className="main-header-buttons" to="/portfolio/warmer">
      {" "}
      <strong>WARMER</strong>
    </Link>
  );
}

export default WarmerBtn;
