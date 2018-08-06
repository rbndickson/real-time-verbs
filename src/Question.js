import React from "react";
import { typeToEmoji } from "./utils/helpers";
import Hideable from "./Hideable";

const Question = props => (
  <div className="tc mt5 mb4 f1-ns f3">
    <Hideable
      socket={props.socket}
      id="questionPronoun"
      className="dib w-20 bb b--purple mh3 pv2"
    >
      <span>{props.question.pronoun}</span>
    </Hideable>
    <Hideable
      socket={props.socket}
      id="questionVerb"
      className="dib w-40 bb b--hot-pink mh3 pv2"
    >
      <span>{props.question.verb.base}</span>
    </Hideable>
    <Hideable
      socket={props.socket}
      id="questionType"
      className="dib w-10 bb b--orange mh3 pv2"
    >
      <div>{typeToEmoji(props.question.type)}</div>
    </Hideable>
  </div>
);

export default Question;
