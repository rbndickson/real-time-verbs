import React, { Component } from "react";
import { exercises } from "./exercises";
import "./Exercise.css";
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
  }

  sampledQuestion() {
    return [sample(pronouns), sample(verbs), sample(["O", "X", "?"])];
  }

  handleNextQuestion() {
    const question = this.sampledQuestion();
    this.setState({ question });
  }

  render() {
    const Fragment = React.Fragment;

    return (
      <Fragment>
        <div className="Exercise-instruction">{this.state.instruction}</div>
        <Examples examples={this.state.examples} />
        <div className="Exercise-question">
          {this.state.question.map(e => <span key={e}>{e}</span>)}
        </div>
        <button onClick={() => this.handleNextQuestion()}>Next Question</button>
      </Fragment>
    );
  }
}

export default Exercise;
