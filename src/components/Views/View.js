import React, { useState } from "react";
import style from "./View.module.css";
import { data } from "./ViewsData";

function View() {
  const [numberOfData, setNumberOfData] = useState(0);
  return (
    <div className={style.main}>
      <div className={style.container} >
        <h2 id="cyber">Виды киберугроз</h2>
        <div className={style.buttons}>
          {data.map((item) => (
            <div
              key={item.id}
              className={
                numberOfData === item.id
                  ? `${style.button} ${style.active}`
                  : style.button
              }
              onClick={() => setNumberOfData(item.id)}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <div className={style.content}>
          <div className={style.image}>
            <img src={data[numberOfData].image} alt="png" />
          </div>
          <div className={style.text}>
            <h3>{data[numberOfData].title}</h3>
            <p>{data[numberOfData].p1}</p>
            <p>{data[numberOfData].p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
