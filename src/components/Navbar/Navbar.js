import React from "react";
import style from "./Navbar.module.css";
import image from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div
          className={style.logo}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={style.content}>
          <a href="/#">Статьи</a>
          <a href="/#">Полезные материалы</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
