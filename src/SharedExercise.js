import React, { Component } from "react";
import { matchPath } from "react-router";
import { exercises } from "./exercises";
import "./Exercise.css";
import { pronouns, verbs } from "./words";
import { sample } from "./utils/helpers";
import io from "socket.io-client";

class SharedExercise extends Component {
  state = {
    instruction: "",
    examples: [],
    question: []
  };

  socket = io("http://localhost:4001");

  componentDidMount() {
    const instruction = exercises.past.instruction;
    const examples = exercises.past.examples;
    const sampledQuestion = this.sampledQuestion();
    const token = this.token();

    this.setState({
      instruction: instruction,
      examples: examples,
      question: sampledQuestion
    });

    this.socket.on("receive question", payload => {
      this.setState({ question: payload.question });
    });

    this.socket.emit("share", { token: token });

    this.socket.emit("question", {
      question: sampledQuestion,
      token: token
    });
  }

  componentWillUnmount() {
    const token = this.token();

    this.socket.emit("unshare", {
      token: token
    });
  }

  token() {
    const match = matchPath(window.location.pathname, {
      path: "/shared/:token"
    });

    let token;

    if (match && match.params.token) {
      token = match.params.token;
    }

    return token;
  }

  sampledQuestion() {
    return [sample(pronouns), sample(verbs), sample(["O", "X", "?"])];
  }

  handleNextQuestion() {
    const sampledQuestion = this.sampledQuestion();
    const token = this.token();

    this.socket.emit("question", {
      question: sampledQuestion,
      token: token
    });
    this.setState({ question: sampledQuestion });
  }

  handleCreateSharedScreen() {}

  render() {
    const Fragment = React.Fragment;

    return (
      <Fragment>
        <p>Share: {window.location.href}</p>
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

export default SharedExercise;
