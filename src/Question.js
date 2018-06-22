import React from "react";
import { typeToEmoji } from "./utils/helpers";
import Hideable from "./Hideable";

const Question = props => (
  <div className="tc mt5 mb4">
    <Hideable
      socket={props.socket}
      token={props.token}
      id="questionPronoun"
      className="dib w-20 f1 mh3 pv2 bg-light-pink"
    >
      <span>{props.question[0]}</span>
    </Hideable>
    <Hideable
      socket={props.socket}
      token={props.token}
      id="questionVerb"
      className="dib w-40 f1 mh3 pv2 bg-light-pink"
    >
      <span>{props.question[1]}</span>
    </Hideable>
    <Hideable
      socket={props.socket}
      token={props.token}
      id="questionType"
      className="dib w-10 f1 mh3 pv2 bg-light-pink"
    >
      <div>{typeToEmoji(props.question[2])}</div>
    </Hideable>
  </div>
);

export default Question;
