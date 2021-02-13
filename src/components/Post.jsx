/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Post(props) {
  return (
    <div className="content__article article">
      <div className="article__image">
        <img src="" alt="" />
      </div>

      <div className="article__title">
        <a href={`/post/${props.postData.id}`}>{props.postData.tittle}</a>
      </div>

      <div className="article__info info">
        <div className="info__user">
          <div className="info__user-avatar">
            <img src="" alt="" />
          </div>
          <div className="info__user-name">
            <a href={`/user/${props.postData.author}`}>{props.postData.author}</a>
          </div>
        </div>
        <div className="info__category">
          <a href={`/category/${props.postData.category}`}>{props.postData.category}</a>
        </div>
        <div className="info__time">{props.postData.dateCreate}</div>
        <div className="info__views">{props.postData.views}</div>
      </div>
    </div>
  );
}
