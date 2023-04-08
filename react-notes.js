("use strict");
//npm start
//localhost:3000/
// !!!! HERE PARAMETERS ARE ARGUMENTS !!!!

// 19. Reference and Primitive Types Refresher: objects and arrays point to the same reference in memory. Primitive values do copies instead
// the best way to do real copies from arr and obj is using the spread operator
// What is npm in node js
// https://careerfoundry.com/en/blog/web-development/what-is-npm/#:~:text=npm%20stands%20for%20Node%20Package,over%2011%20million%20developers%20worldwide.
// What is a Dependency? In today's software development world, a dependency is additional code that a programmer wants to call
// Adding a dependency avoids repeating work already done: designing, writing, testing, debugging, and maintaining a specific unit of code
// 32. Building a component: A component in React is just a js function. This f should have the same name of the file
// 33. Complex JSX: You cannot add more than one element (so one next to each other). You can put all inside a div though and put all inside () to format it
// 34. CSS: You have to use className and not class (this is because class is a keyword in js)!
// 35. Dynamic data. You put curly braces inside the element {} and you basically will have js. This means you can add operations, vars etc.
// 36. You can think about props just being an object which keys are the JSX atts
// 38. Component trees
// 39. How to create wrapper/container components
// 41. JSX behind the scenes. PS: You will see this from old code in every component -> import React from "react";
// 43. The use of arrow functions
// 46. How to add event listeners to JSX elements: using on + the HTML att and adding a function between {} to tell what's executed if the event happens
// A good practice is to put Handler at the end of the function to specify that that f is actually waiting for the user ('handling' the event/response)
// 47. How functions deploy each other under the hood and why there are no changes on click events (there are but the component is not rerendered again)
// 48. Intro to state and useState f (this basically does the component to render again after a change). Every instance has an independent state
// 52. Listening to user input from the e argument and passing it through target.value
// 53. Using more than one useState. Nothing new
// 54. How to have a object as a useState argument in order to use the f only once for more data
// 55. Updating a state that depends on the previous state. Not relevant at the moment
// 56. Work with form submission
// 57. Supertrick to clear the input fields
// 58. Sending data up (props backwards) with callback functions (the info from e will go where the f is, not necessarely where is executed)
// ! we have to check this out since what we are doing in profile and forum is changing a copy of the user data
// 59. Lifting the state up. More about 58
// 60. Controlled vs Uncontrolled Components & Stateless vs Stateful Components
// 66/67. Outputting Conditional Content (not needed for now)
// 74. Dynamic styles and styles with if statements (you won't use it since they are inline)
// 75. Dynamic classes
// ? 76. Scoping classes is important if you work in a team (never thought about this). Let's leave this for the end since it's not 100% necessary now
// ? 77. Passing props to the style
// ? 78. Media query
// ? 79. CSS Modules (in case you want to use more than one class, check the teacher assistant post in the comments. But that's also explained in 80)
// ! 80. Check this before 79 since there's an issue with some class names
// ! Above is not used yet
// 80. to 87. Debugging (incl. Breakpoints, which I never use)
// 88. to 98. Project
// ! 97. Conditionally render a JSX element with short-circuiting. This is super key!!!!
// 101. The wrapper trick (cool but only use it from now on to not mess the CSS or the media queries that refer to those lefit divs)
// The reason the above was a mess is because you were using the GenericWrapper with classes. Those classes were list since the GenericWrapper is nothing
// 102. The <> and the React.Fragment trick
// ! Fragment is the key!!!! Use it from now on. GenericWrapper was a mess...
// 103. Overview of Portals
// 104. Portals. How to put the component in a specific place on the index.html, no matter where it is on the component tree
// From Google: the reason this is handy it's because you can move the component without braking the props chain
// 105. Refs. Do not use it to manipulate the DOM, but to get info from DOM nodes
// 106. Controlled vs Uncontrolled Components
// 109. 110. useEffect (to have stuff only rendered when a value changes)

// ! I saw it explained on 64

// PROPS SCHEME
// 1. DATA (obj) 2. ATT inside COMPONENT REFERENCE that has DATA (from data or any value)
// 3. New obj is created inside the component (called PROPS, used as ARGUMENT to be used inside the function)
// and the keys of PROPS are the ATTs, and the value of they keys the DATA inserted
// EXAMPLE 1. x = abc; 2. <Y att=x></Y> 3. function Y (props) => {props.att = abc (this is true)}
// The ATT value is the value you want to use in your component and the key, the reference. So:
// ATT = props.ATT; ATT value = props.ATT value. ATTs could be easily called ref1 ref2 ref3
//266. Multipage intro

//310. Authentication


function sum(a, b) {
  return a + b;
}
const sum2 = (a, b) => a + b; // if there was only one parameter, you can remove the () (this explains callback functions that only accept e)
// Also callback functions without arguments are called like this: () => {}
// Explanation about how this works in each https://www.youtube.com/watch?v=h33Srr5J9nY

// content:

// width:
// height:
// top:
// right:
// position:
// z-index:
// object-fit:
// transform:
// translate:
// rotate:
// visibility:

// font-family:
// font-size:
// font-weight:
// text-decoration:
// list-style:

// color:
// background-color:
// opacity:
// visibility:
// border:
// border-collapse:
// box-shadow:

// line-height:
// text-align:
// padding:
// margin:

// grid-column:
// display:
// flex-direction:
// grid-template-columns:
// justify-content:
// justify-items:
// align-items:
// gap:

// cursor:

// transition:

// HEIGHT
// WIDTH

// COLOR

// PADDING
// MARGIN
// border
// boxshadow

// DISPLAY
// display
// align
// justify
// gpa

// TRANSLATE
// TRANSITION

// MUTES

// * TINTS OF THE GREEN - https://www.colorhexa.com/c5fae4
// BACKGROUND
// #e9fdf5
// SUPER LIGHT
// #d7fcec
// LIGHT
// #c5fae4
// MEDIUM-LIGHT
// #b3f8dc
// MEDIUM
// #a1f7d3
// HARD
// #7df4c2
// TOP HARD
// #59f1b2
// DEATH STRONG
// #22ec98

// * TINTS OF THE PINK - https://www.colorhexa.com/fac5db
// BACKGROUND
// SUPER LIGHT
// #fde9f1
// LIGHT
// #fcd7e6
// MEDIUM-LIGHT
// #fac5db
// MEDIUM
// #f7a1c5
// X
// #f58fb9
// HARD
// #f47dae
// TOP HARD
// DEATH STRONG

// Good videos
// https://www.youtube.com/watch?v=2VPC1gI9KME

// SUper easy explanation of constructors and the new keyword
// https://www.youtube.com/watch?v=Uhp9xPCILno