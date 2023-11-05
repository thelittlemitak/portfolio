import { Link } from "react-router-dom";

function ForumBtn() {
  return (
    <Link className="main-header-buttons" to="/portfolio/forum">
      {" "}
      <strong>FORUM</strong>
    </Link>
  );
}

export default ForumBtn;
