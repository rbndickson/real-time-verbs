import React, { Component } from "react";
import { matchPath } from "react-router";
import io from "socket.io-client";
import Exercise from "./Exercise";

class SharedExercise extends Component {
  socket = io("http://localhost:4001");

  componentWillUnmount() {
    this.socket.emit("unshare", { token: this.token() });
  }

  token() {
    const match = matchPath(window.location.pathname, {
      path: "/shared/:token"
    });

    let token;

    if (match && match.params.token) {
      token = match.params.token;
    }

    return token;
  }

  render() {
    return (
      <div>
        <p className="dark-green">
          Share to practise together: {window.location.href}
        </p>
        <Exercise socket={this.socket} token={this.token()} />
      </div>
    );
  }
}

export default SharedExercise;
