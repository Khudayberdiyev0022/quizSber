import React from "react";
import style from "./notfound.module.css";

function Page404() {
  return (
    <div className={style.main}>
      <h1>
        Пожалуйста, воспользуйтесь другим браузером для перехода на страницу
        мероприятия
      </h1>
      <h5>Поддерживаемые браузеры</h5>
      <div className={style.links}>
        <a href="https://google.com" target="__blank">
          Chrome,
        </a>
        <a href="https://safari.com" target="__blank">
          Safari,
        </a>
        <a href="https://yandex.ru" target="__blank">
          Yandex,
        </a>
        <a href="https://mozilla.org" target="__blank">
          Firefox,
        </a>
        <a href="https://microsoft.com" target="__blank">
          Edge,
        </a>
        <a href="https://opera.com" target="__blank">
          Opera.
        </a>
      </div>
    </div>
  );
}

export default Page404;
