import "./Carousel.css";

function Carousel() {


  return (
    <div className="carousel-container">
      <picture>
        <source
          srcSet={require("../../img/testimonial1.webp")}
          type="image/webp"
        />
        <source srcSet="../../img/backup-pngs/testimonial1.png" type="image/png" />
        <img
          src="../../img/backup-pngs/testimonial1.png"
          alt="woman smiling without background"
          className="testimonial-img"
          id="testimonial-img-1"
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../img/testimonial2.webp")}
          type="image/webp"
        />
        <source srcSet="../../img/backup-pngs/testimonial2.png" type="image/png" />
        <img
          src="../../img/backup-pngs/testimonial2.png"
          alt="woman smiling without background"
          className="testimonial-img hide-carousel"
          id="testimonial-img-2"
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../img/testimonial3.webp")}
          type="image/webp"
        />
        <source srcSet="../../img/backup-pngs/testimonial2.png" type="image/png" />
        <img
          src="../../img/backup-pngs/testimonial2.png"
          alt="woman smiling without background"
          className="testimonial-img hide-carousel"
          id="testimonial-img-3"
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../img/testimonial4.webp")}
          type="image/webp"
        />
        <source srcSet="../../img/backup-pngs/testimonial2.png" type="image/png" />
        <img
          src="../../img/backup-pngs/testimonial2.png"
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
          "I love managing my entire life from one single place without the need
          of alternative tools or methods."
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
          "Roses are red, sky is blue. MMM is cool and so are you. And you and
          you and you and you and you and you."
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
  );
}

export default Carousel;

/*
// ! FORMS APPAREANCE

const loginForm = document.querySelector('.login-form-cont');
const signupForm = document.querySelector('.signup-form-cont');

const loginBtn = document.getElementById('login-button');
const signUpBtn = document.querySelector('#sign-up-button');
const readyBtn = document.querySelector('.ready-button');

const btnArea = document.querySelector('.button-area');
const body = document.querySelector('body');
const mainEL = document.querySelector('main');
const footer = document.querySelector('.footer-test');

loginBtn.addEventListener('click', function () {
  loginForm.classList.toggle('form-open');

  btnArea.classList.toggle('hide');
  mainEL.classList.toggle('hide');
  footer.classList.toggle('hide');

  body.classList.toggle('hide-overflow-y');
});

signUpBtn.addEventListener('click', function () {
  signupForm.classList.toggle('form-open');

  btnArea.classList.toggle('hide');
  mainEL.classList.toggle('hide');
  footer.classList.toggle('hide');

  body.classList.toggle('hide-overflow-y');
});

readyBtn.addEventListener('click', function () {
  signupForm.classList.toggle('form-open');

  btnArea.classList.toggle('hide');
  mainEL.classList.toggle('hide');
  footer.classList.toggle('hide');

  body.classList.toggle('hide-overflow-y');
});

// ! CAROUSEL MOVEMENT

const btnLeft = document.querySelector('.carousel-button-left');
const btnRight = document.querySelector('.carousel-button-right');

const testImg1 = document.querySelector('#testimonial-img-1');
const testImg2 = document.querySelector('#testimonial-img-2');
const testImg3 = document.querySelector('#testimonial-img-3');
const testImg4 = document.querySelector('#testimonial-img-4');

const testBox1 = document.querySelector('#testimonial-box-1');
const testBox2 = document.querySelector('#testimonial-box-2');
const testBox3 = document.querySelector('#testimonial-box-3');
const testBox4 = document.querySelector('#testimonial-box-4');

const testDot1 = document.querySelector('#dot1');
const testDot2 = document.querySelector('#dot2');
const testDot3 = document.querySelector('#dot3');
const testDot4 = document.querySelector('#dot4');

function hideLeftBtn() {
  if (!testImg1.classList.contains('hide-carousel')) {
    btnLeft.classList.add('hide-carousel');
  }
}
hideLeftBtn();

btnRight.addEventListener('click', function () {
  if (
    testImg2.classList.contains('hide-carousel') &&
    testImg3.classList.contains('hide-carousel') &&
    testImg4.classList.contains('hide-carousel')
  ) {
    testImg1.classList.add('hide-carousel');
    testImg2.classList.remove('hide-carousel');
    testBox1.classList.add('hide-carousel');
    testBox2.classList.remove('hide-carousel');
    testDot1.classList.remove('selected-dot');
    testDot2.classList.add('selected-dot');
    btnLeft.classList.toggle('hide-carousel');
  } else if (
    testImg3.classList.contains('hide-carousel') &&
    testImg4.classList.contains('hide-carousel')
  ) {
    testImg2.classList.add('hide-carousel');
    testImg3.classList.remove('hide-carousel');
    testBox2.classList.add('hide-carousel');
    testBox3.classList.remove('hide-carousel');
    testDot2.classList.remove('selected-dot');
    testDot3.classList.add('selected-dot');
  } else if (testImg4.classList.contains('hide-carousel')) {
    testImg3.classList.add('hide-carousel');
    testImg4.classList.remove('hide-carousel');
    testBox3.classList.add('hide-carousel');
    testBox4.classList.remove('hide-carousel');
    testDot3.classList.remove('selected-dot');
    testDot4.classList.add('selected-dot');
    btnRight.classList.toggle('hide-carousel');
  }
});

btnLeft.addEventListener('click', function () {
  if (
    testImg1.classList.contains('hide-carousel') &&
    testImg2.classList.contains('hide-carousel') &&
    testImg3.classList.contains('hide-carousel')
  ) {
    testImg4.classList.add('hide-carousel');
    testImg3.classList.remove('hide-carousel');
    testBox4.classList.add('hide-carousel');
    testBox3.classList.remove('hide-carousel');
    testDot4.classList.remove('selected-dot');
    testDot3.classList.add('selected-dot');
    btnRight.classList.toggle('hide-carousel');
  } else if (
    testImg2.classList.contains('hide-carousel') &&
    testImg1.classList.contains('hide-carousel')
  ) {
    testImg3.classList.add('hide-carousel');
    testImg2.classList.remove('hide-carousel');
    testBox3.classList.add('hide-carousel');
    testBox2.classList.remove('hide-carousel');
    testDot3.classList.remove('selected-dot');
    testDot2.classList.add('selected-dot');
  } else if (testImg1.classList.contains('hide-carousel')) {
    testImg2.classList.add('hide-carousel');
    testImg1.classList.remove('hide-carousel');
    testBox2.classList.add('hide-carousel');
    testBox1.classList.remove('hide-carousel');
    testDot2.classList.remove('selected-dot');
    testDot1.classList.add('selected-dot');
    btnLeft.classList.toggle('hide-carousel');
  }
});

testDot1.addEventListener('click', function () {
  testImg1.classList.remove('hide-carousel');
  testImg2.classList.add('hide-carousel');
  testImg3.classList.add('hide-carousel');
  testImg4.classList.add('hide-carousel');
  testBox1.classList.remove('hide-carousel');
  testBox2.classList.add('hide-carousel');
  testBox3.classList.add('hide-carousel');
  testBox4.classList.add('hide-carousel');
  testDot1.classList.add('selected-dot');
  testDot2.classList.remove('selected-dot');
  testDot3.classList.remove('selected-dot');
  testDot4.classList.remove('selected-dot');
  btnLeft.classList.add('hide-carousel');
  btnRight.classList.remove('hide-carousel');
});

testDot2.addEventListener('click', function () {
  testImg1.classList.add('hide-carousel');
  testImg2.classList.remove('hide-carousel');
  testImg3.classList.add('hide-carousel');
  testImg4.classList.add('hide-carousel');
  testBox1.classList.add('hide-carousel');
  testBox2.classList.remove('hide-carousel');
  testBox3.classList.add('hide-carousel');
  testBox4.classList.add('hide-carousel');
  testDot1.classList.remove('selected-dot');
  testDot2.classList.add('selected-dot');
  testDot3.classList.remove('selected-dot');
  testDot4.classList.remove('selected-dot');
  btnLeft.classList.remove('hide-carousel');
  btnRight.classList.remove('hide-carousel');
});

testDot3.addEventListener('click', function () {
  testImg1.classList.add('hide-carousel');
  testImg2.classList.add('hide-carousel');
  testImg3.classList.remove('hide-carousel');
  testImg4.classList.add('hide-carousel');
  testBox1.classList.add('hide-carousel');
  testBox2.classList.add('hide-carousel');
  testBox3.classList.remove('hide-carousel');
  testBox4.classList.add('hide-carousel');
  testDot1.classList.remove('selected-dot');
  testDot2.classList.remove('selected-dot');
  testDot3.classList.add('selected-dot');
  testDot4.classList.remove('selected-dot');
  btnLeft.classList.remove('hide-carousel');
  btnRight.classList.remove('hide-carousel');
});

testDot4.addEventListener('click', function () {
  testImg1.classList.add('hide-carousel');
  testImg2.classList.add('hide-carousel');
  testImg3.classList.add('hide-carousel');
  testImg4.classList.remove('hide-carousel');
  testBox1.classList.add('hide-carousel');
  testBox2.classList.add('hide-carousel');
  testBox3.classList.add('hide-carousel');
  testBox4.classList.remove('hide-carousel');
  testDot1.classList.remove('selected-dot');
  testDot2.classList.remove('selected-dot');
  testDot3.classList.remove('selected-dot');
  testDot4.classList.add('selected-dot');
  btnLeft.classList.remove('hide-carousel');
  btnRight.classList.add('hide-carousel');
}); */