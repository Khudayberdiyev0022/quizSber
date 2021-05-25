import React from "react";
import style from "./Navbar.module.css";
import logoBrand from "../../assets/svg/logoBrand.svg";
import logoStatus from "../../assets/svg/logoStatus.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Link to="/">
          <div className={style.logoBrand}>
            <img src={logoBrand} alt="logoBrand" />
          </div>
        </Link>
        <div className={style.content}>
          <a href="#test">Тест</a>
          <a href="#article">Статьи</a>
          <Link to="/useful">Полезные материалы</Link>
        </div>
        <Link to="/">
          <div className={style.logoStatus}>
            <img src={logoStatus} alt="logoStatus" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
