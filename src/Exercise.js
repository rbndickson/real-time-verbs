import React, { Component } from "react";
import { exercises } from "./exercises";
import { pronouns, verbs } from "./words";
import { sample } from "./utils/helpers";
import Examples from "./Examples";

class Exercise extends Component {
  state = {
    instruction: "",
    examples: [],
    question: []
  };

  componentDidMount() {
    const { instruction, examples } = exercises.past;
    const question = this.sampledQuestion();

    this.setState({
      instruction,
      examples,
      question
    });

    // For sharing
    if (this.props.socket && this.props.token) {
      const token = this.props.token;

      this.props.socket.on("receive question", payload => {
        this.setState({ question: payload.question });
      });

      this.props.socket.emit("share", { token });

      this.props.socket.emit("question", {
        question,
        token
      });
    }
  }

  sampledQuestion() {
    return [sample(pronouns), sample(verbs), sample(["O", "X", "?"])];
  }

  handleNextQuestion() {
    const question = this.sampledQuestion();

    // For sharing
    if (this.props.socket && this.props.token) {
      this.props.socket.emit("question", {
        question,
        token: this.props.token
      });
    }

    this.setState({ question });
  }

  render() {
    return (
      <div>
        <div className="f3 mt3">{this.state.instruction}</div>
        <div className="tc mt5 mb5">
          {this.state.question.map(e => (
            <span key={e} className="f1 mr4 ml4 pa3 bg-light-pink">
              {e}
            </span>
          ))}
        </div>
        <div className="tc pt2 pb5">
          <button
            onClick={() => this.handleNextQuestion()}
            className="f6 bn br3 ph3 pv2 mb2 white bg-purple grow pointer"
          >
            Next Question
          </button>
        </div>
        <Examples examples={this.state.examples} />
      </div>
    );
  }
}

export default Exercise;
