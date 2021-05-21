import React from "react";
import {posts} from "./PostsLists"
import style from "./Post.module.css";
import image from "../../assets/images/view.svg";

const Post = () => {

 
  return (
    <div className={style.main}>
      <h1>Статьи</h1>
      <div className={style.container}>
      {posts.map((post) => (
            <div
              key={post.id}
              className={`${style.card} slide`}
              style={{
                backgroundImage: `url(https://hosty.xxx/i/b60d66bee168aa6f8f9066e31f67da4eebaef0d8.jpg)`,
              }}
            >
              <div className={style.content}>
                <p>{post.data}</p>
                <h3>{post.paragraph}</h3>
              </div>
              <div className={style.view}>
                <img src={image} alt="view" />
                <p>{post.view}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Post;
