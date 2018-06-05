import React, { Component } from "react";
import { exercises } from "./exercises";
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
      </Fragment>
    );
  }
}

export default Exercise;
