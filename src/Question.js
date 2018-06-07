import React from "react";

const Question = props => (
  <div className="tc mt5 mb4">
    <div key={props.question[0]} className="dib w-20 f1 mh3 pv2 bg-light-pink">
      {props.question[0]}
    </div>
    <div key={props.question[1]} className="dib w-30 f1 mh3 pv2 bg-light-pink">
      {props.question[1]}
    </div>
    <div key={props.question[2]} className="dib w-10 f1 mh3 pv2 bg-light-pink">
      {props.question[2]}
    </div>
  </div>
);

export default Question;
