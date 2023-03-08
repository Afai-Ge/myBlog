import React from "react";
import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <span>
            Hey There, <br /> I'm Alan.
          </span>
          <span>
            I design beautiful simple <br /> things, And I love what I do
          </span>
        </div>
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="../../public/certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
