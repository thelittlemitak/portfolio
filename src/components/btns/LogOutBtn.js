import { Navigate, useNavigate } from "react-router-dom";

function LogOutBtn(props) {
  const style = {
    margin: "2rem auto",
    display: "block",
    backgroundColor: "white",
  };
  const navigate = useNavigate();

  const outLogger = function () {
    sessionStorage.clear("isLoggedIn");
    sessionStorage.clear("user");
    localStorage.clear("isLoggedIn");
    localStorage.clear("user");
    navigate("/");
    window.scroll(0, 0);
  };

  return (
    <div>
      <button className="main-header-buttons" style={style} onClick={outLogger}>
        <strong>LOGOUT</strong>
      </button>
    </div>
  );
}

export default LogOutBtn;
