import React from "react";

const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src="" />
      </a>
      <div className="content">
        <a href="/">{props.author}</a>
        <div className="meatdata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.userComment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
