import React from "react";

const Question = props => (
  <div className="tc mt5 mb5">
    {props.question.map(e => (
      <span key={e} className="f1 mr4 ml4 pa3 bg-light-pink">
        {e}
      </span>
    ))}
  </div>
);

export default Question;
