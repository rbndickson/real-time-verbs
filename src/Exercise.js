import React, { Component } from "react";
import { exercises } from "./exercises";
import { pronouns, verbs } from "./words";
import { sample } from "./utils/helpers";
import Examples from "./Examples";
import Question from "./Question";
import ExerciseForm from "./ExerciseForm";

const types = ["O", "X", "?"];

class Exercise extends Component {
  state = {
    instruction: "",
    examples: [],
    question: [],
    verbs: [],
    pronoun: "all",
    verb: "all",
    type: "all"
  };

  componentDidMount() {
    const { instruction, examples, omitVerbs } = exercises.past;
    const exerciseVerbs = verbs.filter(v => !omitVerbs.includes(v));
    const question = this.createQuestion(exerciseVerbs);

    this.setState({
      instruction,
      examples,
      question,
      verbs: exerciseVerbs
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

  createQuestion(verbs = this.state.verbs) {
    const pronoun =
      this.state.pronoun === "all" ? sample(pronouns) : this.state.pronoun;
    const verb = this.state.verb === "all" ? sample(verbs) : this.state.verb;
    const type = this.state.type === "all" ? sample(types) : this.state.type;
    return [pronoun, verb, type];
  }

  handleNextQuestion() {
    const question = this.createQuestion();

    // For sharing
    if (this.props.socket && this.props.token) {
      this.props.socket.emit("question", {
        question,
        token: this.props.token
      });
    }

    this.setState({ question });
  }

  handleOnChange(change) {
    this.setState(change);
  }

  render() {
    return (
      <div>
        <div className="f3 mt3">{this.state.instruction}</div>
        <ExerciseForm
          verbs={this.state.verbs}
          pronoun={this.state.pronoun}
          verb={this.state.verb}
          type={this.state.type}
          handleOnChange={change => this.handleOnChange(change)}
        />
        <Question question={this.state.question} />
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
