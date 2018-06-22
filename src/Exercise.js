import React, { Component } from "react";
import { exercises } from "./exercises";
import { pronouns, verbs } from "./words";
import { sample } from "./utils/helpers";
import Highlightable from "./Highlightable";
import Examples from "./Examples";
import Question from "./Question";
import ExerciseForm from "./ExerciseForm";

const types = ["O", "X", "?"];

class Exercise extends Component {
  state = {
    instruction: "",
    examples: [],
    question: [],
    verbs: { beginner: [] },
    pronoun: "all",
    verb: "beginner",
    type: "all",
    showControls: true
  };

  componentDidMount() {
    const { instruction, examples } = exercises.past;

    let exerciseVerbs = verbs;
    exerciseVerbs.common1000 = exerciseVerbs.common1000.filter(
      e => !exercises.past.omitVerbs.includes(e)
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
        this.setState({ question: payload.question });
      });

      this.props.socket.emit("share", { token });

      this.props.socket.emit("question", {
        question,
        token
      });

      this.setState({ showControls: false });
    }
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
      verb = sample(verbs.common1000.slice(0, 500));
    } else {
      verb = this.state.verb;
    }

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
        <Highlightable
          type="div"
          className="f3"
          socket={this.props.socket}
          token={this.props.token}
          id={"instruction"}
        >
          {this.state.instruction}
        </Highlightable>
        {this.state.showControls ? (
          <button
            onClick={() =>
              this.setState({
                showControls: false
              })
            }
            className="dib f7 mt2 bn br3 ph2 pv1 white bg-blue bg-animate hover-bg-dark-blue pointer"
          >
            Controls
          </button>
        ) : (
          <button
            onClick={() =>
              this.setState({
                showControls: true
              })
            }
            className="dib f7 mt2 bn br3 ph2 pv1 white bg-green bg-animate hover-bg-dark-green pointer"
          >
            Controls
          </button>
        )}
        <div className="h1 tc">
          {this.state.showControls && (
            <ExerciseForm
              verbs={this.state.verbs.beginner}
              pronoun={this.state.pronoun}
              verb={this.state.verb}
              type={this.state.type}
              handleOnChange={change => this.handleOnChange(change)}
            />
          )}
        </div>
        <Question question={this.state.question} socket={this.props.socket} />
        <div className="h2">
          {this.state.showControls && (
            <div className="tc">
              <button
                onClick={() => this.handleNextQuestion()}
                className="f6 bn br3 ph3 pv2 mb2 white bg-purple grow pointer"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
        <Examples examples={this.state.examples} socket={this.props.socket} />
      </div>
    );
  }
}

export default Exercise;
