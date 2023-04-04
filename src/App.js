import "./pages/SharedStyle.css";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import Forum from "./pages/forum/Forum";
import TestPage from "./pages/tests/TestPage";
import Motivator from "./pages/motivator/Motivator";
import Warmer from "./pages/warmer/Warmer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/profile", element: <Profile></Profile> },
  { path: "/motivator", element: <Motivator></Motivator> },
  { path: "/about", element: <About></About> },
  { path: "/forum", element: <Forum></Forum> },
  { path: "/test", element: <TestPage></TestPage> },
  { path: "/warmer", element: <Warmer></Warmer> },
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
