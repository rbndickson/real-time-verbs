import React from "react";
import { pronouns } from "./words";

const types = ["O", "X", "?"];

const ExerciseForm = props => (
  <form className="h3 pt3">
    <select
      className="mh2"
      value={props.pronoun}
      onChange={e => {
        props.handleOnChange({ pronoun: e.target.value });
      }}
    >
      <option>all</option>
      {pronouns.map(pronoun => <option key={pronoun}>{pronoun}</option>)}
    </select>
    <select
      className="mh2"
      value={props.verb}
      onChange={e => {
        props.handleOnChange({ verb: e.target.value });
      }}
    >
      <option>beginner</option>
      {props.verbs.map(verb => <option key={verb}>{verb}</option>)}
    </select>
    <select
      className="mh2"
      value={props.type}
      onChange={e => {
        props.handleOnChange({ type: e.target.value });
      }}
    >
      <option>all</option>
      {types.map(type => <option key={type}>{type}</option>)}
    </select>
  </form>
);

export default ExerciseForm;
