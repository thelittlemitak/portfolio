import "./MainWrapper.css";

function MainWrapper(props) {
  return <main className="about-main">{props.children}</main>;
}

export default MainWrapper;