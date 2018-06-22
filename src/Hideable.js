import React, { Component } from "react";

class Hideable extends Component {
  state = {
    isHidden: false
  };

  componentDidMount() {
    // For sharing
    if (this.isSharedExercise()) {
      this.props.socket.on("receive hide", payload => {
        if (payload.id === this.props.id) {
          this.setState(function(state, props) {
            return { isHidden: payload.isHidden };
          });
        }
      });
    }
  }

  isSharedExercise() {
    return this.props.socket && this.props.token;
  }

  handleClick() {
    const isHidden = this.state.isHidden ? false : true;

    // For sharing
    if (this.isSharedExercise()) {
      this.props.socket.emit("toggle hide", {
        isHidden,
        token: this.props.token,
        id: this.props.id
      });
    }

    this.setState(function(state, props) {
      return { isHidden };
    });
  }

  render() {
    let type = this.props.type || "div";
    let classes = this.props.className + " pointer";
    let children = this.state.isHidden ? <span>.</span> : this.props.children;

    if (this.state.isHidden) {
      classes = classes.replace("bg-light-pink", "");
      classes = classes + " white";
    }

    const props = {
      className: classes,
      onClick: () => this.handleClick()
    };

    return React.createElement(type, props, children);
  }
}

export default Hideable;
