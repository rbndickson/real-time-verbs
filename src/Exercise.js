import React, { Component } from "react";
import { Link } from "react-router-dom";
import { exercises } from "./exercises";
import "./Exercise.css";
import { pronouns, verbs } from "./words";
import { sample, generateToken } from "./utils/helpers";
import Examples from "./Examples";

class Exercise extends Component {
  state = {
    instruction: "",
    examples: [],
    question: []
  };

  componentDidMount() {
    const instruction = exercises.past.instruction;
    const examples = exercises.past.examples;
    const sampledQuestion = this.sampledQuestion();

    this.setState({
      instruction: instruction,
      examples: examples,
      question: sampledQuestion
    });
  }

  sampledQuestion() {
    return [sample(pronouns), sample(verbs), sample(["O", "X", "?"])];
  }

  handleNextQuestion() {
    const sampledQuestion = this.sampledQuestion();
    this.setState({ question: sampledQuestion });
  }

  render() {
    const Fragment = React.Fragment;

    return (
      <Fragment>
        <Link to={`shared/${generateToken(8)}`}>Create Shared Screen</Link>
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
