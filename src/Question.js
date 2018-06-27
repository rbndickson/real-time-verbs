import React from "react";
import { typeToEmoji } from "./utils/helpers";
import Hideable from "./Hideable";

const Question = props => (
  <div className="tc mt5 mb4">
    <Hideable
      socket={props.socket}
      id="questionPronoun"
      className="dib w-20 f1 mh3 pv2 bg-light-pink"
    >
      <span>{props.question.pronoun}</span>
    </Hideable>
    <Hideable
      socket={props.socket}
      id="questionVerb"
      className="dib w-40 f1 mh3 pv2 bg-light-pink"
    >
      <span>{props.question.verb.base}</span>
    </Hideable>
    <Hideable
      socket={props.socket}
      id="questionType"
      className="dib w-10 f1 mh3 pv2 bg-light-pink"
    >
      <div>{typeToEmoji(props.question.type)}</div>
    </Hideable>
  </div>
);

export default Question;
