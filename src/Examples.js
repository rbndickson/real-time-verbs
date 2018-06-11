import React from "react";
import Highlightable from "./Highlightable";

const TableData = props => (
  <Highlightable
    type="td"
    className="pr4"
    socket={props.socket}
    token={props.token}
    id={props.id}
  >
    {props.data}
  </Highlightable>
);

const Examples = props => (
  <article className="mw6 mw7-ns br3 hidden ba b--black-10 mv4">
    <h4 className="f5 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
      Examples（例文）
    </h4>
    <div className="pa3 bt b--black-10">
      <table className="Examples">
        <tbody>
          {props.examples.map((example, i) => (
            <tr key={example.question.join("")}>
              <TableData
                key={i}
                data={`${i + 1}.`}
                socket={props.socket}
                token={props.token}
                id={`${i}`}
              />
              {example.question.map(e => (
                <TableData
                  key={e}
                  data={e}
                  socket={props.socket}
                  token={props.token}
                  id={i + e}
                />
              ))}
              <TableData data="=>" />
              <TableData
                data={example.solution}
                socket={props.socket}
                token={props.token}
                id={example.solution}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </article>
);

export default Examples;
