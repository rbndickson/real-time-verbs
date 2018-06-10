import React, { Component } from "react";
import Highlightable from "./Highlightable";

class Instruction extends Component {
  render() {
    return (
      <Highlightable
        text={this.props.text}
        socket={this.props.socket}
        token={this.props.token}
      />
    );
  }
}

export default Instruction;
