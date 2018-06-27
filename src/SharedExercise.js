import React, { Component } from "react";
import { getToken } from "./utils/helpers";
import io from "socket.io-client";
import Exercise from "./Exercise";

class SharedExercise extends Component {
  // socket = io("https://verb-challenge-server.herokuapp.com");
  // In development
  socket = io("http://localhost:4001");

  componentWillUnmount() {
    this.socket.emit("unshare", { token: getToken() });
  }

  render() {
    return (
      <div className="mt4">
        <Exercise socket={this.socket} token={getToken()} />
      </div>
    );
  }
}

export default SharedExercise;
