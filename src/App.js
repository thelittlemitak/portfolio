import "./components/style-elements.css";
import "./components/style-index.css";

function App() {
  return (
    <div>
      <header className="main-header sticky">
        <a className="logo-box logo-box--index" href="index.html">
          M<div id="logo-a">ore</div>M<div id="logo-b">ore</div>M
          <div id="logo-c">e</div>
        </a>
        <div className="button-area">
          <button className="main-header-buttons" id="login-button">
            <strong>LOGIN</strong>
          </button>
          <button className="main-header-buttons" id="sign-up-button">
            <strong>SIGN UP</strong>
          </button>
          <a className="about-button" href="about.html">
            ...about
          </a>
        </div>
      </header>
      <main className="index-main">
        <div className="hero">
          <div>
            <picture>
              <source srcSet={require("./img/graphics.webp")} type="image/webp" />
              <source
                srcSet={"./img/backup-pngs/dataPic5-temp-nocompress-correctsize.png"}
                type="image/png"
              />
              <img
                src="./img/backup-pngs/dataPic5-temp-nocompress-correctsize.png"
                className="graphics-pic"
                alt="different business with dummy graphics and statistics"
              ></img>
            </picture>
          </div>
          <div className="hero-right-box">
            <p>
              We are both a <strong>community</strong> of game-changers and an
              easy <strong>planning tool</strong>.
            </p>
          </div>
        </div>
        <div className="hero-below-section">
          <div className="hero-below-table">
            <div className="hero-below-table-title">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div>
                Time for <strong>more</strong>
              </div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <p className="table-item table-item-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
              HEALTH
            </p>
            <p className="table-item table-item-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              CREATIVITY
            </p>
            <p className="table-item table-item-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              EXERCICE
            </p>
            <p className="table-item table-item-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              NETWORK
            </p>
            <p className="table-item table-item-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              FREE TIME
            </p>
            <p className="table-item table-item-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
              MUSIC
            </p>
            <p className="table-item table-item-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              MONEY
            </p>
            <p className="table-item table-item-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
              LANGUAGES
            </p>
            <p className="table-item table-item-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              LEARNING
            </p>
          </div>
        </div>
        <div className="images-section-container">
          <picture>
            <source srcSet={require("./img/test1.webp")} type="image/webp" />
            <source srcSet={"./img/backup-pngs/test1.png"} type="image/png" />
            <img
              src={"img/backup-pngs/test1.png"}
              className="activities-imgs"
              alt="two hands typing a macbook laptop on a table"
            />
          </picture>
          <picture>
            <source srcSet={require("./img/test2.webp")} type="image/webp" />
            <source srcSet={"./img/backup-pngs/test2.png"} type="image/png" />
            <img
              src="img/backup-pngs/test2.png"
              className="activities-imgs"
              alt="woman doing abs with red trousers on a thin mat"
            />
          </picture>
          <picture>
            <source srcSet={require("./img/test3.webp")} type="image/webp" />
            <source srcSet={"./img/backup-pngs/test3.png"} type="image/png" />
            <img
              src="img/backup-pngs/test3.png"
              className="activities-imgs"
              alt="two hands playing electric guitar"
            />
          </picture>
        </div>
        <section className="post-hero-title-container">
          <p className="post-hero-title">
            Plan your path <strong>easily</strong> from one place
          </p>
        </section>
        <div className="arrow">&darr;</div>
        <section className="how-to-lists-section-container">
          <div className="how-to-lists-container">
            <h4>How it works</h4>
            <div className="list-lines-container">
              <div className="list-individual-lines">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon list-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  Choose your <strong>goals</strong>
                </div>
              </div>
              <div className="list-individual-lines">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon list-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  Set up a <strong>plan</strong> for each
                </div>
              </div>
              <div className="list-individual-lines">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon list-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <strong>Go</strong> for them!
                </div>
              </div>
            </div>
          </div>
          <div className="how-to-lists-container">
            <h4>Share with others</h4>
            <div className="list-lines-container">
              <div className="list-individual-lines">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon list-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <div>
                  A <strong>forum</strong> for each goal
                </div>
              </div>
              <div className="list-individual-lines">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon list-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
                <div>
                  Know <strong>ambitious</strong> companions
                </div>
              </div>
              <div className="list-individual-lines">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="icon list-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <div>
                  Help or get <strong>advice</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="carousel-container">
          <picture>
            <source srcset={require("./img/testimonial1.webp")} type="image/webp" />
            <source
              srcset="img/backup-pngs/testimonial1.png"
              type="image/png"
            />
            <img
              src="img/backup-pngs/testimonial1.png"
              alt="woman smiling without background"
              className="testimonial-img"
              id="testimonial-img-1"
            />
          </picture>
          <picture>
            <source srcset={require("./img/testimonial2.webp")} type="image/webp" />
            <source
              srcset="img/backup-pngs/testimonial2.png"
              type="image/png"
            />
            <img
              src="img/backup-pngs/testimonial2.png"
              alt="woman smiling without background"
              className="testimonial-img hide-carousel"
              id="testimonial-img-2"
            />
          </picture>
          <picture>
            <source srcset={require("./img/testimonial3.webp")} type="image/webp" />
            <source
              srcset="img/backup-pngs/testimonial2.png"
              type="image/png"
            />
            <img
              src="img/backup-pngs/testimonial2.png"
              alt="woman smiling without background"
              className="testimonial-img hide-carousel"
              id="testimonial-img-3"
            />
          </picture>
          <picture>
            <source srcset={require("./img/testimonial4.webp")} type="image/webp" />
            <source
              srcset="img/backup-pngs/testimonial2.png"
              type="image/png"
            />
            <img
              src="img/backup-pngs/testimonial2.png"
              alt="woman smiling without background"
              className="testimonial-img hide-carousel"
              id="testimonial-img-4"
            />
          </picture>
          <blockquote className="testimonial-box" id="testimonial-box-1">
            <p className="testimonial-text">
              "Being able to plan my daily activities together with other people
              it's an amazing way to keep myself motivated."
            </p>
            <p className="testimonial-name">Mariana Chupapi</p>
            <p className="testimonial-description">SEO of Nintendo</p>
          </blockquote>
          <blockquote
            className="testimonial-box hide-carousel"
            id="testimonial-box-2"
          >
            <p className="testimonial-text">
              "I love managing my entire life from one single place without the
              need of alternative tools or methods."
            </p>
            <p className="testimonial-name">Maripau Similitud</p>
            <p className="testimonial-description">SEO of PlayStation</p>
          </blockquote>
          <blockquote
            className="testimonial-box hide-carousel"
            id="testimonial-box-3"
          >
            <p className="testimonial-text">
              "I don't need to have any other management APP on the phone; this
              improved my productivity tremendously."
            </p>
            <p className="testimonial-name">Teresa de la Empresa</p>
            <p className="testimonial-description">SEO of all PCs</p>
          </blockquote>
          <blockquote
            className="testimonial-box hide-carousel"
            id="testimonial-box-4"
          >
            <p className="testimonial-text">
              "Roses are red, sky is blue. MMM is cool and so are you. And you
              and you and you and you and you and you."
            </p>
            <p className="testimonial-name">Mi Tia</p>
            <p className="testimonial-description">SEO of Ibiza</p>
          </blockquote>
          <button
            className="carousel-button carousel-button-left"
            aria-label="previous testimonal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="carousel-button carousel-button-right"
            aria-label="next testimonal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="carousel-dots-container">
          <div className="carousel-dot selected-dot" id="dot1">
            &nbsp;
          </div>
          <div className="carousel-dot " id="dot2">
            &nbsp;
          </div>
          <div className="carousel-dot " id="dot3">
            &nbsp;
          </div>
          <div className="carousel-dot " id="dot4">
            &nbsp;
          </div>
        </div>
        <div className="ready-button-container">
          <button className="ready-button">
            <strong>I AM READY!</strong>
          </button>
        </div>
        <footer className="footer-test">
          <div className="footer-test-container">
            <div>
              <p className="footer-title">MoreMoreMe</p>
              <ul className="social-media-container">
                <li>
                  <a className="footer-link" href="#">
                    <ion-icon
                      className="social-icon"
                      name="logo-instagram"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    <ion-icon
                      className="social-icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    <ion-icon
                      className="social-icon"
                      name="logo-twitter"
                    ></ion-icon>
                  </a>
                </li>
              </ul>
              <div className="copyright-text">
                <p>
                  Copyright &copy <span className="year"></span>
                </p>
                <p>All rights reserved</p>
              </div>
            </div>
            <nav>
              <p className="footer-title">Resources</p>
              <ul className="footer-nav">
                <li>
                  <a href="about.html">About MoreMoreMe</a>
                </li>
                <li>
                  <a href="#">Privacy & terms</a>
                </li>
                <li>
                  <a href="#">Help center</a>
                </li>
              </ul>
            </nav>
            <div>
              <p className="footer-title">Contact</p>
              <address>
                <p>Kreutzigerstr. 10</p>
                <p>10247 Berlin, Germany</p>
                <p>
                  <a href="tel:+34654177940">+34654177940</a>
                </p>
                <p>
                  <a href="mailto:rieraturjose@gmail.com">
                    rieraturjose@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
