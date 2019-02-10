import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./components/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Cody"
        timeAgo="Today at 4:45PM"
        userComment="Nice Post!"
      />
      <CommentDetail
        author="Scarlett"
        timeAgo="Today at 4:45PM"
        userComment="This isn't to bad."
      />
      <CommentDetail
        author="Indigo"
        timeAgo="Yesterday at 5:00PM"
        userComment="Bah Bah!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
