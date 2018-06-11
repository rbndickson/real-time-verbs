import React from "react";

const TableData = props => <td className="pr4">{props.data}</td>;

const Examples = props => (
  <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4">
    <h4 className="f5 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
      Examples（例文）
    </h4>
    <div className="pa3 bt b--black-10">
      <table className="Examples">
        <tbody>
          {props.examples.map((example, i) => (
            <tr key={example.question.join("")}>
              <TableData key={i} data={`${i + 1}.`} />
              {example.question.map(e => <TableData key={e} data={e} />)}
              <TableData data="=>" />
              <TableData data={example.solution} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </article>
);

export default Examples;
