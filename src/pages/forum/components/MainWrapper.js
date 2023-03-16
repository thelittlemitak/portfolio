import "./MainWrapper.css";

function MainWrapper(props) {
  return <div className="forum-container">{props.children}</div>;
}

export default MainWrapper;
