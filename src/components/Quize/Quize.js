import React, { Fragment, useReducer } from "react";
import share from '../../utils/share';
import style from "./Quize.module.css";
import image from "../../assets/svg/bgQuize.svg";
import img from "../../assets/img/Component2.png";
import img2 from "../../assets/img/Component3.png";
import img4 from "../../assets/svg/defender.svg";
import update from "../../assets/svg/update.svg";
import fb from "../../assets/svg/Facebook.svg";
import vk from "../../assets/svg/Vk.svg";
import ok from "../../assets/svg/Odnoklassniki.svg";
import iconEye from "../../assets/svg/iconEye.svg";
import iconPrev from "./../../assets/svg/iconPrev.svg";
import { questions } from "./QuestionList";

const initialState = {
  mouseHover: false,
  selected: null,
  clicked: 1,
  allScore: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    case "HOVER":
      return {
        ...state,
        mouseHover: action.payload,
      };
    case "BACK":
      return {
        ...state,
        selected: initialState.selected,
      };
    case "RELOAD":
      return initialState;
    case "CLICKED":
      return {
        ...state,
        clicked: state.clicked + action.payload,
        selected: null,
        allScore: state.allScore + Number(state.selected.score),
      };
    default:
      return state;
  }
};
const Quize = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reloadPage = () => {
    dispatch({ type: "RELOAD" });
  };
  const questionRender = () => {
    return (
      <div className={style.contentContainer}>
        <img className={style.iconEye} src={iconEye} alt="iconEye" />
        <h2>
          {state.clicked < 8 && state.clicked} <span>ИЗ 7 ШАГОВ</span>{" "}
        </h2>
        <h1>{questions[state.clicked - 1][0].answer}</h1>
        <h1 className={style.mobileH1}>
          {!state.selected && questions[state.clicked - 1][0].answer}
        </h1>
        <div className={style.info}>
          <div className={style.questions}>
            {state.selected !== null && (
              <div
                className={
                  state.selected.score > 1
                    ? `${style.active} ${style.question1}`
                    : `${style.notActive} ${style.question1}`
                }
              >
                <h3>{state.selected?.text}</h3>
              </div>
            )}
            {state.clicked < 8 &&
              state.selected === null &&
              questions[state.clicked - 1].map((question) => {
                if (state.selected?.id === question.id) {
                  return null;
                } else {
                  return (
                    <div
                      key={question.id}
                      className={style.question}
                      onClick={() => {
                        dispatch({ type: "SELECTED", payload: question });
                      }}
                      onMouseEnter={() =>
                        dispatch({ type: "HOVER", payload: true })
                      }
                      onMouseLeave={() =>
                        dispatch({ type: "HOVER", payload: false })
                      }
                    >
                      <h3>{question.text}</h3>
                    </div>
                  );
                }
              })}
            {state.selected !== null && (
              <div className={style.answers}>
                <h3>{state.selected.subText}</h3>
              </div>
            )}
            {state.selected !== null && (
              <div className={style.buttons}>
                <div
                  className={style.button2}
                  onClick={() => dispatch({ type: "BACK", payload: 1 })}
                >
                  <h2>Назад</h2>
                </div>
                <div
                  className={style.iconPrev}
                  onClick={() => dispatch({ type: "BACK", payload: 1 })}
                >
                  <img src={iconPrev} alt="iconPrev" />
                </div>
                <div
                  className={style.button1}
                  onClick={() => dispatch({ type: "CLICKED", payload: 1 })}
                >
                  {state.clicked < 7 ? (
                    <h2>Следующий вопрос</h2>
                  ) : (
                    <h2 className={style.nextBtnBg}>Перейти к результам</h2>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className={style.image}
            style={
              state.selected
                ? { backgroundImage: `url(${state.selected.svg})` }
                : { backgroundImage: `url(${state.mouseHover ? img2 : img})` }
            }
          ></div>
          <div
            className={style.imageMobile}
            style={
              state.selected
                ? {
                    backgroundImage: `url(${state.selected.svg})`,
                    height: "175px",
                  }
                : null
            }
          ></div>
        </div>
      </div>
    );
  };
  const resultRender = () => {
    return (
      <div className={style.mainResult}>
        <h1>
          <span>результат</span> – {state.allScore} баллов
        </h1>
        {state.allScore >= 0 && (
          <div className={style.resultPage}>
            <div className={style.left}>
              {state.allScore < 7 && <h1>Вы задремали на посту</h1>}
              {state.allScore <= 13 && (
                <Fragment>
                  {state.allScore >= 7 && <h1>Вы уверенный пользователь</h1>}
                </Fragment>
              )}
              {state.allScore <= 21 && (
                <Fragment>
                  {state.allScore >= 14 && (
                    <h1>Вы - настоящий киберзащитник!</h1>
                  )}
                </Fragment>
              )}
              {state.allScore < 7 && (
                <p>
                  Кажется, вы не обсуждали с ребенком правила безопасности в
                  сети: может быть, он просто еще не дорос до собственных
                  гаджетов, а может, вы сами не считаете это важным. В любом
                  случае, вам вместе с ребенком стоит подтянуть теорию и узнать
                  об опасностях интернета.
                </p>
              )}
              {state.allScore <= 13 && (
                <Fragment>
                  {state.allScore >= 7 && (
                    <p>
                      Вы знаете о правилах безопасности в сети и говорите о них
                      с ребенком, но вам не хватает регулярности. Порой, вы про
                      них забываете, а ребенок не всегда готов делиться с вами
                      подробностями своей интернет-жизни.
                    </p>
                  )}
                </Fragment>
              )}
              {state.allScore <= 21 && (
                <Fragment>
                  {state.allScore >= 14 && (
                    <p>
                      Поздравляем! Вы точно знаете, как обезопасить свои личные
                      данные и говорите об этом с ребенком. Но не забывайте, что
                      происходящее в интернете очень быстро меняется и свои
                      знания тоже надо обновлять.
                    </p>
                  )}
                </Fragment>
              )}
            </div>
            <div className={style.right}>
              <div
                className={style.imageRight}
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>
          </div>
        )}
        <div className={style.iconsAll}>
          <div className={style.iconsGroup}>
            <div className={style.icons}>
              <div className={style.fb} onClick={() => share.facebook()}>
                <img src={fb} alt="fb" />
              </div>
              <div className={style.vk} onClick={() => share.vkontakte()}>
                <img src={vk} alt="vk" />
              </div>
              <div className={style.ok} onClick={() => share.odnoklassniki()}>
                <img src={ok} alt="ok" />
              </div>
            </div>
          </div>
          <div className={style.reload} onClick={reloadPage}>
            <img src={update} alt="update" />
            <a href="#test">Пройти еще раз</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div
          className={style.content}
          id="test"
          style={{ backgroundImage: `url(${image})` }}
        >
          {state.clicked < 8 && questionRender()}
          {state.clicked >= 8 && resultRender()}
        </div>
      </div>
      <h2 className={style.headerBottom} id="article">
        Статьи
      </h2>
    </div>
  );
};

export default Quize;
