import React from "react";
import style from "./Header.module.css";
import iconSalute from "../../assets/svg/iconSalute.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>
          Быть родителем. <br /> Быть киберзащитником
        </h2>
        <p>
          Безопасность в интернете ничуть не менее важна, чем в реальной жизни.
          Необходимо не только научить ребёнка правилам безопасного поведения,
          но и самому правильно определять свой подход к заботе.{" "}
        </p>
        <div className={style.iconSalute}>
          <img src={iconSalute} alt="iconSalute" />
        </div>
        <div className={style.buttons}>
          <button className={style.buttonGreen}>
            <Link to="/salute">Пройти тест с ассистентами Салют</Link>
          </button>
          <button className={style.buttonBlack}>
            <a href="#test">Остаться на сайте и пройти тест</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
