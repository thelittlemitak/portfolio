import { Link } from "react-router-dom";

function ProfileBtn(props) {
  return (
    <Link className="main-header-buttons profile-btn" to="/portfolio/profile">
      {" "}
      <strong>{props.userNameTunnel}</strong>
    </Link>
  );
}

export default ProfileBtn;
