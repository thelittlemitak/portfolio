import React, { useState, useEffect } from "react";

function Pictures(props) {
  console.log(props.currentPosTunnel);

  const style1 = "testimonial-img";
  const style2 = "testimonial-img hidden";

  const [classes, setClasses] = useState([style1, style2, style2, style2]);

  useEffect(() => {
    if (props.currentPosTunnel === 0) {
      setClasses([style1, style2, style2, style2]);
    } else if (props.currentPosTunnel === 1) {
      setClasses([style2, style1, style2, style2]);
    } else if (props.currentPosTunnel === 2) {
      setClasses([style2, style2, style1, style2]);
    } else if (props.currentPosTunnel === 3) {
      setClasses([style2, style2, style2, style1]);
    }
  }, [props.currentPosTunnel]);

  return (
    <div>
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
          className={classes[0]}
          id="testimonial-img-1"
        />
      </picture>
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
          className={classes[1]}
          id="testimonial-img-2"
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../../img/testimonial3.webp")}
          type="image/webp"
        />
        <source
          srcSet="../../../img/backup-pngs/testimonial3.png"
          type="image/png"
        />
        <img
          src="../../../img/backup-pngs/testimonial3.png"
          alt="woman smiling without background"
          className={classes[2]}
          id="testimonial-img-2"
        />
      </picture>
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
          className={classes[3]}
          id="testimonial-img-2"
        />
      </picture>
    </div>
  );
}

export default Pictures;
