import React from "react";
import style from "./Navbar.module.css";
import logoBrand from "../../assets/images/logoBrand.svg";
import logoStatus from "../../assets/images/logoStatus.svg";

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div
          className={style.logoCard}
        >
          <div className={style.logoBrand}>
          <img  src={logoBrand} alt="logoBrand" />
          </div>
          <div className={style.logoStatus}>

          <img src={logoStatus} alt="logoStatus" />
          </div>
          <span></span>
        </div>
        <div className={style.content}>
        <a href="/#">Тест</a>
          <a href="/#">Статьи</a>
          <a href="/#">Полезные материалы</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
