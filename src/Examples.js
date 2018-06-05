import React from "react";
import "./Examples.css";

const Examples = props => (
  <React.Fragment>
    <h4>Examples:</h4>
    <table className="Examples">
      <tbody>
        {props.examples.map(example => (
          <tr key={example.question.join("")}>
            {example.question.map(e => <td key={e}>{e}</td>)}
            <td>{example.solution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);

export default Examples;
