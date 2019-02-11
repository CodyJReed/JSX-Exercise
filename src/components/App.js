import React, { Component } from "react";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

class App extends Component {
  state = {
    response: ""
  };

  renderContent() {
    if (this.state.response === "Reject") {
      return <div>Sorry, no comments available.</div>;
    } else if (this.state.response === "Approve") {
      return (
        <div>
          <p>This is an Approved message!</p>
          <ApprovalCard
            onClick={e => this.setState({ response: e.target.textContent })}
          >
            <CommentDetail
              author="Cody"
              timeAgo={new Date().toLocaleTimeString()}
              userComment="Nice Post!"
            />
          </ApprovalCard>
        </div>
      );
    } else {
      return (
        <ApprovalCard
          onClick={e => this.setState({ response: e.target.textContent })}
        >
          <CommentDetail
            author="Cody"
            timeAgo={new Date().toLocaleTimeString()}
            userComment="Nice Post!"
          />
        </ApprovalCard>
      );
    }
  }
  render() {
    return <div className="ui container comments">{this.renderContent()}</div>;
  }
}

export default App;
