import "./Hero.css";

function Hero() {
  return (
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
          My name is <strong>Jose Riera Tur</strong> and I welcome you to my{" "}
          <strong>portfolio!</strong>
        </p>
      </div>
    </div>
  );
}

export default Hero;
