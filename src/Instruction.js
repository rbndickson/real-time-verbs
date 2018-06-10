import React, { Component } from "react";

class Instruction extends Component {
  state = {
    highlighted: false
  };

  handleClick() {
    this.setState(function(state, props) {
      return { highlighted: this.state.highlighted ? false : true };
    });
  }

  render() {
    return (
      <div
        className={`pa1 br2 f3 mt3 pointer ${
          this.state.highlighted ? "bg-yellow" : ""
        }`}
        onClick={() => this.handleClick()}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Instruction;
