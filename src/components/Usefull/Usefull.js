import React from "react";
import style from "./Usefull.module.css";
import img from "../../assets/svg/download.svg";
import apple from "../../assets/svg/apple.svg";
import android from "../../assets/svg/android.svg";
import windows from "../../assets/svg/windows.svg";
import sber from "../../assets/sber.pdf";

const Usefull = () => {
  const data = [
    {
      id: 0,
      title: "Чек-лист по цифровой гигиене",
      mb: "3,8",
      pdf: sber,
      iOS: null,
      android: null,
      macOS: null,
      Windows: null,
    },
    {
      id: 1,
      title: "Памятки настройки безопасности гаджетов для защиты ",
      mb: null,
      pdf: null,
      iOS: apple,
      android: android,
      macOS: apple,
      Windows: windows,
    },
  ];
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2 id="usefull">Полезные материалы</h2>
        <div className={style.cards}>
          {data.map((item, index) => (
            <div key={item.id} className={style.card}>
              <div>
                <h3>{item.title}</h3>
              </div>
              <div className={style.bottom}>
                {item.mb && <h4>{item.mb} Mb (PDF)</h4>}
                {index === 0 && (
                  <a
                    href={item.pdf}
                    className={style.image}
                    rel="noreferrer"
                    download
                  >
                    <img src={img} alt="svg" />
                  </a>
                )}
                {item.iOS && (
                  <div className={style.operationBlock}>
                    <div className={style.operationFlex}>
                      <a
                        href="https://www.sberbank.ru//common/img/uploaded/redirected/promo.sber.ru/kidssafety/docs/pamyatka_nastroiki_bezopasnosti_ios_dlya_zashchity_dete%C4%AD_compressed.pdf"
                        target="__blank"
                        style={{ textDecoration: "none" }}
                      >
                        <div className={style.operationBox}>
                          <img src={item.iOS} alt="iOS" />
                          <p>iOS</p>
                        </div>
                      </a>
                      <a
                        href="https://www.sberbank.ru//common/img/uploaded/redirected/promo.sber.ru/kidssafety/docs/pamyatka_nastroiki_bezopasnosti_android_24_05(1)_compressed.pdf"
                        target="__blank"
                        style={{ textDecoration: "none" }}
                      >
                        <div className={style.operationBox}>
                          <img src={item.android} alt="android" />
                          <p>Android</p>
                        </div>
                      </a>
                    </div>
                    <div className={style.operationFlex}>
                      <a
                        href="https://www.sberbank.ru//common/img/uploaded/redirected/promo.sber.ru/kidssafety/docs/pamyatka_nastroiki_bezopasnosti_komp'yutery_macos_24_05(1)_compressed.pdf"
                        target="__blank"
                        style={{ textDecoration: "none" }}
                      >
                        <div className={style.operationBox}>
                          <img src={item.macOS} alt="macOS" />
                          <p>Mac OS</p>
                        </div>
                      </a>
                      <a
                        href="https://www.sberbank.ru//common/img/uploaded/redirected/promo.sber.ru/kidssafety/docs/pamyatka_nastroiki_bezopasnosti_komp'yutery_windows_24_05_compressed.pdf"
                        target="__blank"
                        style={{ textDecoration: "none" }}
                      >
                        <div className={style.operationBox}>
                          <img src={item.Windows} alt="Windows" />
                          <p>Windows</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usefull;
