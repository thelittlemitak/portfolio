import { Link } from "react-router-dom";

function ForumBtn() {
  return (
    <Link className="main-header-buttons" to="/forum">
      {" "}
      <strong>FORUM</strong>
    </Link>
  );
}

export default ForumBtn;
