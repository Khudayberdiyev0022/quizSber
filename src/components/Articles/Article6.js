import React from "react";
import { Link } from "react-router-dom";
import style from "./Article.module.css";
import { cyber } from "./ArticlesList";
import prevArticles from "../../assets/svg/prevArticles.svg";

const Article6 = () => {
  const data = cyber[5];
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
          <ul>
            <li>{data.pList1}</li>
          </ul>
          <p>{data.p1}</p>
          <ul>
            <li>{data.pList2}</li>
          </ul>
          <p>{data.p2}</p>
          <p>{data.p3}</p>
          <ul>
            <li>{data.pList3}</li>
          </ul>
          <p>{data.p4}</p>
          <p>{data.p5}</p>
          <p>{data.p6}</p>
          <ul>
            <li>{data.pList4}</li>
          </ul>
          <p>{data.p7}</p>
          <ul>
            <li>{data.pList5}</li>
          </ul>
          <p>{data.p8}</p>
          <ul>
            <li>{data.pList6}</li>
          </ul>
          <p>{data.p9}</p>
          <h2>{data.number1}</h2>
          <p className={style.pargraph}>{data.numberText1}</p>
          <p className={style.pargraph}>{data.numberText1Two}</p>
          <p className={style.pargraph}>{data.numberText1Three}</p>
          <p className={style.pargraph}>{data.numberText1Four}</p>
          <h2>{data.number2}</h2>
          <p className={style.pargraph}>{data.numberText2}</p>
          <p className={style.pargraph}>{data.numberText2Two}</p>
         
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

export default Article6;
