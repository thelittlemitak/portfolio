function Picture3() {
  return (
    <picture>
      <source
        srcSet={require("../../../img/testimonial4.webp")}
        type="image/webp"
      />
      <source
        srcSet="../../../img/backup-pngs/testimonial4.png"
        type="image/png"
      />
      <img
        src="../../../img/backup-pngs/testimonial4.png"
        alt="woman smiling without background"
        className="testimonial-img"
        id="testimonial-img-2"
      />
    </picture>
  );
}

export default Picture3;
