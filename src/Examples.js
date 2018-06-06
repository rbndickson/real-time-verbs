import React from "react";

const Examples = props => (
  <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4">
    <h4 className="f5 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
      Examples
    </h4>
    <div className="pa3 bt b--black-10">
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
    </div>
  </article>
);

export default Examples;
