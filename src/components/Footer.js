import "./Footer.css";
import { Link } from "react-router-dom";

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
            <p>Kidding</p>
          </div>
        </div>
        <nav>
          <p className="footer-title">Resources</p>
          <ul className="footer-nav">
            
            <li>
              <a
                href="https://github.com/thelittlemitak/portfolio"
                target="_blank"
              >
                GitHUB source code
              </a>
            </li>
            <li>
              <Link to="/portfolio/about">About MoreMoreMe</Link>
            </li>
            {/* <li>
              <a href="#">Help center</a>
            </li> */}
          </ul>
        </nav>
        <div className="contact-footer">
          <p className="footer-title">Contact</p>
          <address>
            <p>Jose Riera Tur</p>

            <p>Kreutzigerstr. 10</p>
            <p>10247 Berlin, Germany</p>
            <p>
              <a href="tel:+4915208659779">0152 / 086 59 779</a>
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
