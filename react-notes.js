('use strict');
//npm start
//http://localhost:3000/
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
// 36. You can think about props just being an object which keys are the JSX atts // ! NOT USED IN THE PROJECT YET but maybe it's useful for data input
// 38. Component trees // ! NOT USED IN THE PROJECT YET but maybe it's useful for data input
// 39. How to create wrapper/container components // ! NOT USED IN THE PROJECT YET; maybe for the mains
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
// ! There's actually no need to bring data up if nothing needs it
// 59. Lifting the state up. More about 58
// 60. Controlled vs Uncontrolled Components & Stateless vs Stateful Components
// ! List rendering. Important to remember this to reference what you do in Profile

// ! I saw it explained on 64

// PROPS SCHEME
// 1. DATA (obj) 2. ATT inside COMPONENT REFERENCE that has DATA (from data or any value)
// 3. New obj is created inside the component (called PROPS, used as ARGUMENT to be used inside the function)
// and the keys of PROPS are the ATTs, and the value of they keys the DATA inserted
// EXAMPLE 1. x = abc; 2. <Y att=x></Y> 3. function Y (props) => {props.att = abc (this is true)}
// The ATT value is the value you want to use in your component and the key, the reference. So:
// ATT = props.ATT; ATT value = props.ATT value. ATTs could be easily called ref1 ref2 ref3
//266. Multipage intro