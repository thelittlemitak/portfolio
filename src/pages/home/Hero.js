import "./Hero.css";

function Hero() {
  return <div className="hero">
  <div>
    <picture>
      <source srcSet={require("../../img/graphics.webp")} type="image/webp" />
      <source
        srcSet={"../../img/backup-pngs/dataPic5-temp-nocompress-correctsize.png"}
        type="image/png"
      />
      <img
        src="../../img/backup-pngs/dataPic5-temp-nocompress-correctsize.png"
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
}

export default Hero;