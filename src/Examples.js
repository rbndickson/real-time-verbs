import React from "react";

const Examples = props => (
  <React.Fragment>
    <h4>Examples:</h4>
    <table className="Examples">
      <tbody>
        {props.examples.map((example, i) => (
          <tr key={example.question.join("")}>
            <td className="pr4" key={i}>
              {i + 1}.
            </td>
            {example.question.map(e => (
              <td className="pr4" key={e}>
                {e}
              </td>
            ))}
            <td className="pr4">=></td>
            <td>{example.solution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);

export default Examples;
