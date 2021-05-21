import React from "react";
import style from "./Information.module.css";
import img from "../../assets/images/buttonicon.svg";

const Information = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Быть родителем. <br/> Быть киберзащитником</h1>
        <p>
          Безопасность в интернете ничуть не менее важна, чем в реальной жизни.
          Необходимо не только научить ребёнка правилам безопасного поведения,
          но и самому правильно определять свой подход к заботе.{" "}
        </p>
        <div className={style.buttons}>
          <div className={style.buttonGreen}>
            <img src={img} alt="images" width="24px" height="24px" />
            <h3>Пройти тест в Салюте</h3>
          </div>
          <div className={style.buttonBlack}>
            <h3>Остаться на сайте и пройти тест</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
