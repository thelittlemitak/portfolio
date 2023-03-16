function Picture1() {
  return (
    <picture>
      <source
        srcSet={require("../../../img/testimonial1.webp")}
        type="image/webp"
      />
      <source
        src="../../../img/backup-pngs/testimonial1.png"
        type="image/png"
      />
      <img
        src="../../../img/backup-pngs/testimonial1.png"
        alt="woman smiling without background"
        className="testimonial-img"
        id="testimonial-img-1"
      />
    </picture>
  );
}

export default Picture1;
