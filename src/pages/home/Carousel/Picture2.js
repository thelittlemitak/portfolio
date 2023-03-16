function Picture2() {
  return (
    <picture>
      <source
        srcSet={require("../../../img/testimonial2.webp")}
        type="image/webp"
      />
      <source
        srcSet="../../../img/backup-pngs/testimonial2.png"
        type="image/png"
      />
      <img
        src="../../../img/backup-pngs/testimonial2.png"
        alt="woman smiling without background"
        className="testimonial-img"
        id="testimonial-img-2"
      />
    </picture>
  );
}

export default Picture2;
