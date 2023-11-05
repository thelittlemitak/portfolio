import { Navigate, useNavigate } from "react-router-dom";
import "./LogOutBtn.css";

function LogOutBtn(props) {
  const navigate = useNavigate();

  const outLogger = function () {
    sessionStorage.clear("isLoggedIn");
    sessionStorage.clear("user");
    localStorage.clear("isLoggedIn");
    localStorage.clear("user");
    navigate("/portfolio");
    window.scroll(0, 0);
  };

  return (
    <div>
      <button className="main-header-buttons logout" onClick={outLogger}>
        <strong>LOGOUT</strong>
      </button>
    </div>
  );
}

export default LogOutBtn;
