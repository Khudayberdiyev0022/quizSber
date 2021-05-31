import React from "react";
import style from "./Usefull.module.css";
import img from "../../assets/svg/download.svg";
import sber from "../../assets/sber.pdf";

const Usefull = () => {
  const data = [
    {
      id: 0,
      title: "Чек-лист по цифровой гигиене ",
      mb: "3,5",
      pdf: sber,
    },
    {
      id: 1,
      title: "Памятки настройки безопасности гаджетов для защиты ",
      mb: "3,5",
      pdf: sber,
    },
    {
      id: 2,
      title: "Чек-лист по цифровой гигиене ",
      mb: "3,5",
      pdf: sber,
    },
  ];
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2 id="usefull">Полезные материалы</h2>
        <div className={style.cards}>
          {data.map((item) => (
            <div key={item.id} className={style.card}>
              <div>
                <h4>Презентация PDF</h4>
                <h3>{item.title}</h3>
              </div>
              <div className={style.bottom}>
                <h4>{item.mb} Mb</h4>
                <a
                  href={item.pdf}
                  className={style.image}
                  rel="noreferrer"
                  download
                >
                  <img src={img} alt="svg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usefull;
