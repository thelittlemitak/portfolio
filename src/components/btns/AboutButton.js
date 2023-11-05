import { Link } from "react-router-dom";
import "./Abt&CntBtn.css";

function AboutButton() {
  return (
    <Link className="about-button" to="/portfolio/about">
      ...about
    </Link>
  );
}

export default AboutButton;
