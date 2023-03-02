import "./style-about.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function About() {
  return (
    <div>
      <Header></Header>
      <main className="about-main">
        <div className="about-hero">
          <picture>
            <source
              srcSet={require("../../img/about-salute.webp")}
              type="image/webp"
            />
            <source
              srcSet={"../../img/backup-pngs/about-salute.png"}
              type="image/png"
            />
            <img
              src="../../img/backup-pngs/about-salute.png"
              alt="a picture of a beautiful man sitting with a computer next to flowers"
              className="about-hero-left-img"
            ></img>
          </picture>
          <div className="about-hero-right">
            <p>
              My name is <strong>Jose Riera Tur</strong> and I welcome you to my
              <strong>portfolio!</strong>
            </p>
          </div>
        </div>
        <div className="about-not-hero">
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
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default About;

/*
    <div class="signup-form-cont">
      <form class="signup-form" action="#">
        <div>
          <div class="form-section">
            <label for="full-name">Alias</label>
            <input id="full-name" type="text" placeholder="myalias" required />
          </div>
          <div class="form-section">
            <label for="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="my@email.com"
              required
            />
          </div>
          <div class="form-section">
            <label for="password">Password</label>
            <input
              id="password"
              type="email"
              placeholder="************"
              required
            />
          </div>
        </div>
        <div class="form-section">
          <div>Goals</div>
          <div class="form-goals-grid">
            <div>Network</div>
            <div>Health</div>
            <div>Creativity</div>
            <div>Money</div>
            <div>Languages</div>
            <div>Music</div>
            <div>Free time</div>
            <div>Exercice</div>
            <div>Learning</div>
            <div class="new-goal-cell">Add new</div>
          </div>
        </div>
        <div>
          <div class="form-section">
            <label for="new-goal">Add new goal</label>
            <input id="new-goal" type="string" placeholder="Goal" />
          </div>
          <div class="form-section">Goals total: </div>
        </div>
      </form>
    </div>
    <div class="login-form-cont">
      <form class="login-form" action="#">
        <div class="form-section">
          <label for="full-name">Alias</label>
          <input id="full-name" type="text" placeholder="myalias" required />
        </div>
        <div class="form-section">
          <label for="email">Email address</label>
          <input id="email" type="email" placeholder="my@email.com" required />
        </div>
        <button class="form-button">Log in</button>
      </form>
      <div class="alert-container">
        <div class="form-alert">Not yet a memeber?</div>
        <button class="form-button form-signup-btn">Sign up</button>
      </div>
    </div> */
