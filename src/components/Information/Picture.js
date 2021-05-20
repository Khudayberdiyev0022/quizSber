import React from "react";
import image from "../../assets/images/picture.png";
import style from "./Picture.module.css";

const Picture = () => {
  return (
    <div className={style.main}>
      <img src={image} alt="pictures"  />
    </div>
  );
};

export default Picture;
