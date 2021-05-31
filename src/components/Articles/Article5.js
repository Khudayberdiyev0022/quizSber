import React from "react";
import { Link } from "react-router-dom";
import style from "./Article.module.css";
import { cyber } from "./ArticlesList";
import prevArticles from "../../assets/svg/prevArticles.svg";

const Article5 = () => {
  const data = cyber[4];
  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style.backArticle}>
          <Link to="/">
            <img src={prevArticles} alt="prevArticles" />
            <p>Назад</p>
          </Link>
        </div>
        <img src={data.img} alt="png" />
        <h1>{data.title}</h1>
      </div>
      <div className={style.bgContainer}>
        <div className={style.container}>
          <h2>{data.h}</h2>
          <p>{data.pargraph}</p>
          <p>{data.pargraph1}</p>
          <p>{data.pargraph2}</p>
          <ul>
            <li>{data.list}</li>
            <li>{data.list1}</li>
          </ul>
          <h1>{data.h1}</h1>
          <p>{data.p}</p>
          <p>{data.p1}</p>
          <p>{data.p2}</p>
          <h1>{data.h2}</h1>
          <p>{data.p3}</p>
          <ul>
            <li>{data.list2}</li>
            <li>{data.list3}</li>
            <li>{data.list4}</li>
            <li>{data.list5}</li>
            <li>{data.list6}</li>
          </ul>
          <h2>{data.nuberTitle}</h2>
          <h2>{data.number1}</h2>
          <p className={style.pargraph}>{data.numberText1}</p>
          <h2>{data.number2}</h2>
          <p className={style.pargraph}>{data.numberText2}</p>
          <h2>{data.number3}</h2>
          <p className={style.pargraph}>{data.numberText3}</p>
          <h2>{data.number4}</h2>
          <p className={style.pargraph}>{data.numberText4}</p>
          <h2>{data.number5}</h2>
          <p className={style.pargraph}>{data.numberText5}</p>
          <h2>{data.h3}</h2>
          <h2>{data.h3number1}</h2>
          <p>{data.h3numberText1}</p>
          <h2>{data.h3number2}</h2>
          <ul>
            <li>{data.h3list1}</li>
            <li>{data.h3list2}</li>
            <li>{data.h3list3}</li>
            <li>{data.h3list4}</li>
          </ul>
          <p>{data.h3numberText2}</p>
          <h2>{data.h3number2}</h2>
          <p>{data.h3numberText2}</p>
          <h2>{data.h3number3}</h2>
          <p>{data.h3numberText3}</p>
          <h2>{data.h3number4}</h2>
          <p>{data.h3numberText4}</p>
          <h2>{data.h3number5}</h2>
          <p>{data.h3numberText5}</p>
          <h2>{data.h3number6}</h2>
          <p>{data.h3numberText6}</p>
          <h2>{data.h3number7}</h2>
          <p>{data.h3numberText7}</p>
        </div>
        <div className={style.footerArticle}>
          <p>
            В приложении «Сбербанк Онлайн» вы можете больше узнать о
            кибербезопасности, цифровой грамотности и родительстве. Для этого
            эксперты разработали каналы, которые легко найти по названию через
            поиск:{" "}
            <a
              href="https://www.sberbank.ru/dl/jc/index.html?linkname=fraud"
              target="__blank"
            >
              «Осторожно, мошенники!»
            </a>
            ,{" "}
            {/* <br/> */}
            <a
              href="https://www.sberbank.ru/dl/jc/index.html?linkname=fraud"
              target="__blank"
            >
              «Ничего личного»
            </a>{" "}
            и{" "}
            <a
              href="https://www.sberbank.ru/dl/jc/index.html?linkname=fraud"
              target="__blank"
            >
              «Счастливый родитель»
            </a>
            . В каждом канале — полезные статьи и видео, которые помогут быстро
            узнать ответы на вопросы, которые волнуют всех родителей.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article5;
