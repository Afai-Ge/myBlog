import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`bg-primary paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Alan</div>
        <ul
          style={getMenuStyles(menuOpened)}
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          {/* <li className={`flexCenter ${css.email}`}>
            <AiOutlineMail size={"40px"} />
            <p>zhouzehui29@163.com</p>
          </li> */}
        </ul>
        {/* 仅在中小屏幕使用 */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
