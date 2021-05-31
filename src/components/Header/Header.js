import React from "react";
import style from "./Header.module.css";
import iconSalute from "../../assets/svg/iconSalute.svg";

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
          <a className={style.buttonGreen} href="http://sberbank.ru/sms/vadzd-website" target="__blank">
            Пройти тест с ассистентами Салют
          </a>
          <a className={style.buttonBlack} href="#test">Остаться на сайте и пройти тест</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
