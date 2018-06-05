import React, { Component } from "react";
import { exercises } from "./exercises";

class Exercise extends Component {
  state = {
    instruction: "",
    examples: []
  };

  componentDidMount() {
    const instruction = exercises.past.instruction;
    const examples = exercises.past.examples;

    this.setState({
      instruction: instruction,
      examples: examples
    });
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
      </Fragment>
    );
  }
}

export default Exercise;
