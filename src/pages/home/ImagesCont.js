import "./ImagesCont.css";

function ImagesCont() {
  return (
    <div className="images-section-container">
      <picture>
        <source srcSet={require("../../img/test1.webp")} type="image/webp" />
        <source srcSet={"../../img/backup-pngs/test1.png"} type="image/png" />
        <img
          src={"../../img/backup-pngs/test1.png"}
          className="activities-imgs"
          alt="two hands typing a macbook laptop on a table"
        />
      </picture>
      <picture>
        <source srcSet={require("../../img/test2.webp")} type="image/webp" />
        <source srcSet={"../../img/backup-pngs/test2.png"} type="image/png" />
        <img
          src="../../img/backup-pngs/test2.png"
          className="activities-imgs"
          alt="woman doing abs with red trousers on a thin mat"
        />
      </picture>
      <picture>
        <source srcSet={require("../../img/test3.webp")} type="image/webp" />
        <source srcSet={"../../img/backup-pngs/test3.png"} type="image/png" />
        <img
          src="../../img/backup-pngs/test3.png"
          className="activities-imgs"
          alt="two hands playing electric guitar"
        />
      </picture>
    </div>
  );
}

export default ImagesCont;
