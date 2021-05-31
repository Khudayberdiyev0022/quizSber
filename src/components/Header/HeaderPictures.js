import React from "react";
import style from "./HeaderPictures.module.css";
import bg from "../../assets/img/bg.png";

const HeaderPictures = () => {
  return (
    <div className={style.bg}>
      <img src={bg} alt="bg" />
    </div>
  );
};

export default HeaderPictures;
