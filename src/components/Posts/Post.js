import React, { useEffect, useState } from "react";
import style from "./Post.module.css";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import image from "../../assets/images/view.svg";

function Post() {
  const items = [
    {
      id: 1,
      data: "20 июня 2020  ",
      paragraph:
        "Какие данные лучше не раскрывать в интернете - статья о приватности",
      view: "35",
    },
    {
      id: 2,
      data: "20 июня 2020  ",
      paragraph:
        "Какие правила поведения в сети стоит ввести у себя в семье, как наладить доверие, избежать детских истерик и родительскогиперконтроля",
      view: "45",
    },
    {
      id: 3,
      data: "20 июня 2020  ",
      paragraph:
        "Как безопасно совершать покупки в интернете (про детские карты, покупки в соцсетях и тд) ",
      view: "86",
    },
    {
      id: 4,
      data: "20 июня 2020  ",
      paragraph: "Нужны рекомендации и/или материалы от экспертов Сбер Kids",
      view: "63",
    },
    {
      id: 5,
      data: "20 июня 2020  ",
      paragraph:
        "Как избежать кибербуллинга и как помочь своему ребенку, если это все-таки случилось",
      view: "21",
    },
    {
      id: 6,
      data: "20 июня 2020  ",
      paragraph:
        "Приложения и программы для родителей и детей, которые помогут защитить ребенка в сети",
      view: "38",
    },
    {
      id: 7,
      data: "20 июня 2020  ",
      paragraph: "Как уберечь ребенка от вредного и опасного контента в сети",
      view: "59",
    },
  ];
  const [pages, setPages] = useState(2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.self.innerWidth < 1300 && window.self.innerWidth > 1000) {
        setPages(2);
      } else if (window.self.innerWidth < 1000) {
        setPages(1);
      } else {
        setPages(2);
      }
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <div className={style.main}>
      <h1>Статьи</h1>
      <div className={style.container}>
        <Slider slidesToShow={pages} autoplaySpeed={3000} autoplay={true}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${style.card} slide`}
              style={{
                backgroundImage: `url(https://hosty.xxx/i/b60d66bee168aa6f8f9066e31f67da4eebaef0d8.jpg)`,
              }}
            >
              <div className={style.content}>
                <p>{item.data}</p>
                <h3>{item.paragraph}</h3>
              </div>
              <div className={style.view}>
                <img src={image} alt="view" />
                <p>{item.view}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Post;
