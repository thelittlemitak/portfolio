import "./pages/SharedStyle.css";
import { Navigate, useNavigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import Forum from "./pages/forum/Forum";
import Motivator from "./pages/motivator/Motivator";
import Warmer from "./pages/warmer/Warmer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/portfolio/", element: <Home></Home> },
  { path: "/portfolio/profile", element: <Profile></Profile> },
  { path: "/portfolio/motivator", element: <Motivator></Motivator> },
  { path: "/portfolio/about", element: <About></About> },
  { path: "/portfolio/forum", element: <Forum></Forum> },
  { path: "/portfolio/warmer", element: <Warmer></Warmer> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/*
 // ! HAVE THE CORRECT YEAR ON THE FOOTER
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// ! CLASS FOR THE OLD-SAFARI FLEX GAP ISSUE
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap(); */
