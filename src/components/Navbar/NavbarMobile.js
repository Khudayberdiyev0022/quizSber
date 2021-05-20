import React, { useState } from "react";
import style from "./NavbarMobile.module.css";
import image from "../../assets/images/logo.svg";
import menu from "../../assets/images/burger.svg";
import img from "../../assets/images/buttonicon.svg";
import close from "../../assets/images/close.svg";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.visible}>
          <div
            className={style.logo}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div
            onClick={() => setClick(true)}
            className={style.menu}
            style={{ backgroundImage: `url(${menu})` }}
          ></div>
        </div>
        {click && (
          <div className={style.invisible}>
            <div className={style.top}>
              <div
                onClick={() => setClick(false)}
                className={style.close}
                style={{ backgroundImage: `url(${close})` }}
              ></div>
              <div className={style.content}>
                <a href="/#" onClick={() => setClick(false)}>
                  Статьи
                </a>
                <a href="/#" onClick={() => setClick(false)}>
                  Полезные материалы
                </a>
              </div>
            </div>
            <div className={style.bottom}>
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
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
