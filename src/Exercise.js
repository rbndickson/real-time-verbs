import React, { Component } from "react";
import { exercises } from "./exercises";
import "./Exercise.css";
import { pronouns, verbs } from "./words";
import { sample } from "./utils/helpers";

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
        <div className="Exercise-instruction">{this.state.instruction}</div>
        <h4>Examples:</h4>
        <table className="Exercise-examples">
          <tbody>
            {this.state.examples.map(example => (
              <tr key={example.question.join("")}>
                {example.question.map(e => <td key={e}>{e}</td>)}
                <td>{example.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="Exercise-question">
          {this.state.question.map(e => <span key={e}>{e}</span>)}
        </div>
        <button onClick={() => this.handleNextQuestion()}>Next Question</button>
      </Fragment>
    );
  }
}

export default Exercise;
