import React from "react";
import { Link } from "react-router-dom";
import style from "./Article.module.css";
import { cyber } from "./ArticlesList";
import prevArticles from "../../assets/svg/prevArticles.svg";

const Article1 = () => {
  const data = cyber[0];
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
          <p>{data.pargraph}</p>
          <h1>{data.h1}</h1>
          <p>{data.p}</p>
          <h1>{data.h2}</h1>
          <p>{data.p1}</p>
          <h2>{data.number1}</h2>
          <p className={style.pargraph}>{data.numberText1}</p>
          <ul>
            <li>{data.numberText1List1}</li>
            <li>{data.numberText1List2}</li>
            <li>{data.numberText1List3}</li>
            <li>{data.numberText1List4}</li>
            <li>{data.numberText1List5}</li>
            <li>{data.numberText1List6}</li>
            <li>{data.numberText1List7}</li>
          </ul>
          <p>{data.numberText1P}</p>
          <h2>{data.number2}</h2>
          <p className={style.pargraph}>{data.numberText2}</p>
          <h2>{data.number3}</h2>
          <p>{data.numberText3}</p>
          <h2>{data.number4}</h2>
          <p className={style.pargraph}>{data.numberText4}</p>
          <h2>{data.number5}</h2>
          <p className={style.pargraph}>{data.numberText5}</p>
          <h2>{data.number6}</h2>
          <p className={style.pargraph}>{data.numberText6}</p>
          <h2>{data.number7}</h2>
          <p className={style.pargraph}>{data.numberText7}</p>
         
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

export default Article1;
