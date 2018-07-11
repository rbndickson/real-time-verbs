import React, { Component } from "react";
import { exercises } from "./exercises";
import { pronouns, verbs } from "./words";
import { sample, capitalize } from "./utils/helpers";
import Highlightable from "./Highlightable";
import Examples from "./Examples";
import Question from "./Question";
import ExerciseForm from "./ExerciseForm";

const types = ["O", "X", "?"];

class Exercise extends Component {
  state = {
    instruction: "",
    examples: [],
    question: { pronoun: "", verb: { base: "", pastTense: "" }, type: "" },
    verbs: { beginner: [] },
    pronoun: "all",
    verb: "beginner",
    type: "all",
    showControls: true,
    showAnswer: false
  };

  componentDidMount() {
    const { instruction, examples } = exercises.past;

    let exerciseVerbs = verbs;
    exerciseVerbs.common1000 = exerciseVerbs.common1000.filter(
      e =>
        !(
          exercises.past.omitVerbs.includes(e) ||
          exercises.past.omitVerbs.includes(e.base)
        )
    );

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
        this.setState({ question: payload.question, showAnswer: false });
      });

      this.props.socket.on("receive show answer", payload => {
        this.setState({ showAnswer: true });
      });

      this.props.socket.emit("share", { token });

      this.props.socket.emit("question", {
        question,
        token
      });

      this.setState({ showControls: false });
    }

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  createQuestion(verbs = this.state.verbs) {
    let verb;
    const exercisePronouns = pronouns.filter(
      e => !exercises.past.omitPronouns.includes(e)
    );
    const pronoun =
      this.state.pronoun === "all"
        ? sample(exercisePronouns)
        : this.state.pronoun;

    if (this.state.verb === "beginner") {
      verb = sample(verbs.beginner);
    } else if (this.state.verb === "common 200") {
      verb = sample(verbs.common1000.slice(0, 200));
    } else if (this.state.verb === "common 500") {
      verb = { base: sample(verbs.common1000.slice(231, 500)), pastTense: "" };
    } else {
      verb = this.state.verb;
    }

    const type = this.state.type === "all" ? sample(types) : this.state.type;
    return { pronoun, verb, type };
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

    this.setState({ question, showAnswer: false });
  }

  handleShowAnswer() {
    // For sharing
    if (this.props.socket && this.props.token) {
      this.props.socket.emit("show answer", {
        token: this.props.token
      });
    }

    this.setState({ showAnswer: true });
  }

  handleOnChange(change) {
    if (
      change.verb &&
      !["beginner", "common 200", "common 500"].includes(change.verb)
    ) {
      const v = this.state.verbs.beginner.find(e => e.base === change.verb);
      this.setState({ verb: v });
    } else {
      this.setState(change);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 67) {
      this.setState(prevState => ({
        showControls: !prevState.showControls
      }));
    }
  }

  answer() {
    if (this.state.question.type === "O") {
      return `${capitalize(this.state.question.pronoun)} ${
        this.state.question.verb.pastTense
      } ~`;
    }
    if (this.state.question.type === "X") {
      return `${capitalize(this.state.question.pronoun)} didn't ${
        this.state.question.verb.base
      } ~`;
    } else {
      return `Did ${this.state.question.pronoun} ${
        this.state.question.verb.base
      } ~ ?`;
    }
  }

  render() {
    return (
      <div>
        <Highlightable
          type="div"
          className="f3"
          socket={this.props.socket}
          token={this.props.token}
          id={"instruction"}
        >
          {this.state.instruction}
        </Highlightable>
        <div className="h1 tc">
          {this.state.showControls && (
            <ExerciseForm
              beginnerVerbs={this.state.verbs.beginner}
              pronoun={this.state.pronoun}
              verb={this.state.verb}
              type={this.state.type}
              handleOnChange={change => this.handleOnChange(change)}
            />
          )}
        </div>
        <Question question={this.state.question} socket={this.props.socket} />
        <div className="f4 h1 tc mb4">
          {this.state.showAnswer && <div>{this.answer()}</div>}
        </div>
        <div className="h2 tc">
          {this.state.showControls && (
            <button
              onClick={() => this.handleNextQuestion()}
              className="f4 bn br3 ph3 pv2 mb2 white bg-purple grow pointer"
            >
              Next Question
            </button>
          )}
          {this.state.showControls && (
            <button
              onClick={() => this.handleShowAnswer()}
              className="f4 bn br3 ph3 pv2 mt2 ml2 purple bg-yellow grow pointer"
            >
              Show Answer
            </button>
          )}
        </div>
        <Examples examples={this.state.examples} socket={this.props.socket} />
      </div>
    );
  }
}

export default Exercise;
