import React, { useState, useRef, useEffect } from "react";

import "./style-about.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainWrapper from "./MainWrapper";
import Hero from "./Hero";
import AboutButton from "../../components/btns/AboutButton";
import ContactButton from "../../components/btns/ContactButton";
import SignUpBtn from "../../components/btns/SignUpBtn";
import LoginBtn from "../../components/btns/LoginBtn";
import DummyBtn from "../../components/btns/DummyBtn";
import HeaderAbout from "../../components/HeaderAbout";
import "../MediaQueries.css";
import ArrowDown from "../../components/ArrowDown";
import QuestionAnswer from "./QuestionAnswer";
import TestF from "../../components/TestF";
import ScrollToTop from "../../components/ScrollToTop";
import { Link } from "react-router-dom";

function About() {
  let h2Ref = useRef();
  const [h2StyleRight, setH2StyleRight] = useState("h2-about-right");
  const [h2StyleLeft, setH2StyleLeft] = useState("h2-about-left");
  const dummyFloat = useRef();

  const [postpostLeftStyle, setPostpostLeftStyle] = useState(
    "postposthero-card postposthero-leftcard"
  );
  const [postpostRightStyle, setPostpostRightStyle] = useState(
    "postposthero-card postposthero-rightcard"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log("it is intersecting");
        setPostpostLeftStyle(
          "postposthero-card postposthero-leftcard inthemiddle"
        );
        setPostpostRightStyle(
          "postposthero-card postposthero-rightcard inthemiddle"
        );
      }
    });
    observer.observe(dummyFloat.current);
  }, []);

  const dummyFloat2 = useRef();

  const [postpostpostCardStyle, setPostPostPostCardStyle] = useState(
    "postpostposthero-card about-sec-4"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log("it is intersecting");
        setPostPostPostCardStyle(
          "postpostposthero-card about-sec-4 inthemiddle"
        );
      }
    });
    observer.observe(dummyFloat2.current);
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(function (entries) {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       console.log("it is intersecting");
  //       setH2StyleRight("h2-about-right appearance");
  //       setH2StyleLeft("h2-about-left appearance");
  //     }
  //   });
  //   observer.observe(h2Ref.current);
  // }, []);

  const faqs = [
    {
      question: "What is your current employment status?",
      answer:
      "I am currently under contract, which will conclude on the 30th of June. Therefore, starting from the 1st of July, I will be available to join your company."    },
    {
      question:
        "Do you only have this website (MMM) as your portfolio? If so, why?",
      answer:
      "Yes, based on my experience working on previous projects, I have come to realize how easy it can be to hesitate and switch to something new when faced with complex challenges. By undertaking one large project, I have pushed myself to commit to achieving a final result and resolve all the obstacles that arose along the way, regardless of their level of difficulty."    },
    {
      question: "Will MMM ever be completely functional for users?",
      answer:
      "Yes, but only in the context of my learning goals and not with the intention of establishing it as a real company. As I progress, my next step is to venture into backend development. Currently, my focus revolves around learning and implementing database functionality, enabling individual user logins, and providing the capability to save and manage user entries."    },
    {
      question: "Why did you learn how to program?",
      answer:
      "For me, it was primarily driven by the desire to create. Learning programming never felt like a separate endeavor but rather an intrinsic part of my identity. It emerged from a genuine need to utilize these tools to bring my ideas to life. Programming and design immerse me in a state of flow, like playing a musical instrument or video games."    },
    {
      question: "Are you self-taught? What resources did you use to learn?",
      answer:
      "Yes, I initially began my programming journey with Udemy courses. These courses provided a structured learning path, spanning over 200 hours collectively, which proved to be immensely helpful, especially in the early stages. However, as I progressed, I found myself increasingly focused on specific projects and goals, relying on resources such as Google and YouTube whenever I encountered specific challenges or needed further guidance."    },
    // {
    //   question: "What did you learnt so far?",
    //   answer: "Udemy courses and this and that",
    // },
    // {
    //   question: "Do you have other interests?",
    //   answer: "Video games, backend",
    // },
  ];

  return (
    <div>
      <HeaderAbout altBtn4={ContactButton}></HeaderAbout>
      <MainWrapper>
        <ScrollToTop></ScrollToTop>
        <Hero></Hero>
        <div className="wrapper-test">
          <div className="posthero-card posthero-leftcard">
            <div className="presentation presentation-titles">
              What is MoreMoreMe?
            </div>
            {/* <div className="presentation">
          Since I don't have prior working experience I decided to create a
          website that shows my skills as a web developer.
        </div> */}
            <div className="presentation">
              A simple but powerful CRUD React-based website that shows all my
              current web developer skills. It is also responsive (try it on
              your phone)!
            </div>
          </div>
          <section className="posthero-card posthero-rightcard">
            <div className="presentation presentation-titles techno-title">
              Technologies used
            </div>
            <div className="pictures-grid">
              <div className="pic-titles-box">
                <picture className="about-pic-wrapper">
                  <source
                    srcSet={require("../../img/vsc-logo.webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={"../../img/backup-pngs/vsc-logo.png"}
                    type="image/png"
                  />
                  <img
                    src="../../img/backup-pngs/vsc-logo.png"
                    alt="blue logo of a design software company"
                    className="about-logo"
                  ></img>
                </picture>
                <div>VS Code</div>
              </div>
              <div className="pic-titles-box">
                <picture>
                  <source
                    srcSet={require("../../img/code-logos.webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={"../../img/backup-pngs/code-logos.png"}
                    type="image/png"
                  />
                  <img
                    src="../../img/backup-pngs/code-logos.png"
                    alt="multi color logo of web development technologies"
                    className="about-logo"
                  ></img>
                </picture>
                <div>HTML CSS JS</div>
              </div>
              <div className="pic-titles-box">
                <picture>
                  <source
                    srcSet={require("../../img/react.webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={"../../img/backup-pngs/react.png"}
                    type="image/png"
                  />
                  <img
                    src="../../img/backup-pngs/react.png"
                    alt="blue logo of a web development technology"
                    className="about-logo"
                  ></img>
                </picture>
                <div>React</div>
              </div>
              <div className="pic-titles-box">
                <picture>
                  <source
                    srcSet={require("../../img/affinity-logo.webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={"../../img/backup-pngs/affinity-logo.png"}
                    type="image/png"
                  />
                  <img
                    src="../../img/backup-pngs/affinity-logo.png"
                    alt="blue logo of a design software company"
                    className="about-logo"
                  ></img>
                </picture>
                <div>Affinity Designer</div>
              </div>
            </div>
          </section>
          <div className={postpostLeftStyle}>
            <div className="presentation presentation-titles">
              Is this a real company?
            </div>
            <div className="presentation">
              MoreMoreMe (MMM) is a fictitious project aimed at providing a
              platform for practice and experimentation. The testimonials
              featured on the website are purely fictional, and the main page,
              along with certain functionalities, serves as a practice exercise
              to enhance skills and knowledge.
            </div>
          </div>
          <div className={postpostRightStyle}>
            <div className="presentation presentation-titles">
              And the rest?
            </div>
            <div className="presentation">
              Once logged in, you will discover a range of organizational tools,
              specifically focused on CRUD operations. These tools were
              instrumental in motivating my learning process as I actively
              utilized them myself.
            </div>
          </div>
          <div className={postpostpostCardStyle}>
            <div className="presentation presentation-titles">
              How can I navigate this website?
            </div>
            <div className="presentation">
              Once you have explored the home page, you are ready to dive into
              the organizational tools! To access them, simply head back to the{" "}
              <Link to={"/portfolio"} className="presentation--link">
                main page
              </Link>{" "}
              and click on the Login button. The required credentials can be
              found below the message labeled "I am a recruiter".
            </div>
          </div>
          <div className="dummy-floatingEl" ref={dummyFloat}></div>
          <div className="dummy-floatingEl2" ref={dummyFloat2}></div>
        </div>
        <section className="faq-senction">
          {" "}
          <h2 className="faq-h2">FAQ</h2>
          <QuestionAnswer faqTunnel={faqs[0]}></QuestionAnswer>
          <QuestionAnswer faqTunnel={faqs[1]}></QuestionAnswer>
          <QuestionAnswer faqTunnel={faqs[2]}></QuestionAnswer>
          <QuestionAnswer faqTunnel={faqs[3]}></QuestionAnswer>
          <QuestionAnswer faqTunnel={faqs[4]}></QuestionAnswer>
        </section>

        {/* <div className="presentation presentation-titles">
          In case you want to know more:
        </div>
        <div className="presentation presentation-titles">Why MMM?</div>
        <div className="presentation">
          Because the project was big enough to learn React very well. Also, the
          tools inside of it were actually of huge help to me, that being an
          enormous motivator to do something different.
        </div> */}
        {/* <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          Scroll down
        </div>
        <h2 className={h2StyleRight} ref={h2Ref}>
          Why should you hire me?
        </h2>
        <h2 className={h2StyleLeft}>Why</h2>
        <h2 className="h2-about">Hola</h2>*/}
        {/* <div className="about-not-hero">
          <div className="faq-question-container">
            <div className="faq-number">1</div>
            <div className="faq-question">Why MoreMoreMe?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>XXXXXXXXXXXXXXXXXXXX</div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">1</div>
            <div className="faq-question">Why should you hire me?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              Yes! I wanted to create a real world project to keep myself
              motivated and big enough to include all the technologies that I
              learnt so far. There are actually a few people using it every day,
              which is awesome!
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">1</div>
            <div className="faq-question">
              Is this website completely functional?
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              Yes! I wanted to create a real world project to keep myself
              motivated and big enough to include all the technologies that I
              learnt so far. There are actually a few people using it every day,
              which is awesome!
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">2</div>
            <div className="faq-question">Are you a full stack developer?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              It all started with frontend , but it happened naturally that
              after finishing my studies and started this website, I just kept
              going and began with backend courses. Then I realized I could
              apply what I learnt to this website.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">3</div>
            <div className="faq-question">Did you learn by yourself?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              Yes! I think that if you really love something, you can always do
              it by yourself. I do the same with music. We creative people want
              results quick, so my mind can get into flow state very easily and
              master something just by repetition.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">4</div>
            <div className="faq-question">
              What have been your sources of information?
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              First YouTube. Then I went to Udemy to have more structure, to
              then come back to YouTube and Google for the little nuances. But I
              would refer to Udemy as my real 'instructor'; that's were I spent
              most of the time at the beginning.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">5</div>
            <div className="faq-question">What Udemy courses did you do?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              <a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">
                HTML-CSS.
              </a>{" "}
              <a href="https://www.udemy.com/course/advanced-css-and-sass">
                Advanced CSS (incl. SASS).
              </a>{" "}
              <a href="www.udemy.com/course/git-and-github-bootcamp">
                Git-GitHub.
              </a>{" "}
              <a href="https://www.udemy.com/course/the-complete-javascript-course">
                JavaScript.
              </a>{" "}
              <a href="https://www.udemy.com/course/understanding-typescript">
                TypeScript.
              </a>{" "}
              <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux">
                React (incl. Hooks, Redyx, React Routing, Next.js...).
              </a>{" "}
              <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp">
                Node.js
              </a>
              .
            </div>
          </div>

          <h1>Funny-personal questions (why not!)</h1>
          <div className="faq-question-container">
            <div className="faq-number">1</div>
            <div className="faq-question">
              What has been the max amount of time you spent coding?
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              13 hours! It was from 9 in the morning of a Sunday until 1am;
              stopped 90min two times to eat. I was doing the first website and
              I couldn't stop.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">2</div>
            <div className="faq-question">
              What has been your most shameful mistake?
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              I was writting length with 'ht' for 30 minutes and still couldn't
              find the error... When I found the mistake I made a huge sign on
              the wall.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">3</div>
            <div className="faq-question">Did you ever wanted to give up?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              No! But it took me a while to take the decision of getting into it
              full time. Basically because I discovered it relatively late in
              life so I had to be 100% sure. But I fell in love with it
              naturally and slowly. In the end, it was meant to be.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">4</div>
            <div className="faq-question">
              Why did you get interested in coding at all?
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>
              When I saw that Stardew Valley (my favorite video game) was done
              by only one person. That blew my mind so I started with C just
              right after because I wanted to be able to do the same. Then I
              realized that websites were somehow similar and that I could help
              other people.
            </div>
          </div>
          <div className="faq-question-container">
            <div className="faq-number">5</div>
            <div className="faq-question">Xxxxxxxxxxx?</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="faq-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="faq-answer">
            <div>Xxxxxxxxxxxxxx.</div>
          </div>
        </div> */}
      </MainWrapper>
      <Footer></Footer>
    </div>
  );
}

export default About;

// let h2Ref = useRef();
// let x = 1;
// setInterval(() => {
//   x++;
// }, 1000);

// const options = {};

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// }, options);

// useEffect(() => {
//   console.log(h2Ref.current);
//   const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//       console.log(entry);
//     });
//     observer.observe(h2Ref.current);
//   }, options);
// }, [x]);
