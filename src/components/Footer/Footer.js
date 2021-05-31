import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.blogs}>
          <div className={style.b1}>
            <h2>+7 (495) 500-55-50</h2>
            <h2>Телефон для звонков из любой точки мира</h2>
            <h3>Согласие на обработку персональных данных</h3>
            <h3>Информация о мобильных приложениях партнеров</h3>
          </div>
          <div className={style.b1}>
            <h2>900</h2>
            <h2>Бесплатно с мобильного на территории РФ</h2>
            <h3>Информация о партнерах</h3>
          </div>
        </div>
        <p>
          © 1997—2021 ПАО Сбербанк. Генеральная лицензия на осуществление
          банковских операций от 11 августа 2015 года. Регистрационный номер —
          1481.
        </p>
      </div>
    </div>
  );
};

export default Footer;
