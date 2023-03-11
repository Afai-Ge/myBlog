import React from "react";
import css from "./Expertise.module.scss";
import { projectExperience } from "../../utils/data";
import { motion } from "framer-motion";
import {} from "../../utils/motion";
const Expertise = () => {
  return (
    <section className={css.wrapper}>
      <a href=""></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftNode}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span>{exp.project}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={css.rightNode}>right size</div>
      </div>
    </section>
  );
};

export default Expertise;
