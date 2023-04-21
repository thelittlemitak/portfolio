import { Link } from "react-router-dom";

function TodoBtn() {
  return (
    <Link className="main-header-buttons" to="/profile">
      {" "}
      <strong>TO-DO</strong>
    </Link>
  );
}

export default TodoBtn;
