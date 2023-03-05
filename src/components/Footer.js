import "./Footer.css";

function Footer() {
  let currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-test" id="footer">
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
              Copyright &copy; <span>{currentYear}</span>
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
              <a href="mailto:rieraturjose@gmail.com">rieraturjose@gmail.com</a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
