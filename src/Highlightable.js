import React, { Component } from "react";

class Highlightable extends Component {
  state = {
    isHighlighted: false
  };

  componentDidMount() {
    // For sharing
    if (this.isSharedExercise()) {
      this.props.socket.on("receive highlight", payload => {
        if (payload.id === this.props.id) {
          this.setState(function(state, props) {
            return { isHighlighted: payload.isHighlighted };
          });
        }
      });
    }
  }

  isSharedExercise() {
    return this.props.socket && this.props.token;
  }

  handleClick() {
    const isHighlighted = this.state.isHighlighted ? false : true;

    // For sharing
    if (this.isSharedExercise()) {
      this.props.socket.emit("toggle highlighted", {
        isHighlighted,
        token: this.props.token,
        id: this.props.id
      });
    }

    this.setState(function(state, props) {
      return { isHighlighted };
    });
  }

  render() {
    let highlightClasses = ` pa1 br2 pointer ${
      this.state.isHighlighted ? "bg-yellow" : ""
    }`;

    highlightClasses = this.props.className + highlightClasses;

    const props = {
      className: highlightClasses,
      onClick: () => this.handleClick()
    };

    return React.createElement(this.props.type, props, this.props.children);
  }
}

export default Highlightable;
