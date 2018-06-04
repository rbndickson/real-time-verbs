import React, { Component } from "react";
import "./VerbList.css";
import { verbs } from "./words";

class VerbList extends Component {
  state = {
    verbs: []
  };

  componentDidMount() {
    this.setState({ verbs: verbs });
  }

  render() {
    return (
      <ol>
        {this.state.verbs.map(verb => (
          <li key={verb} className="VerbList-verb">
            <span>{verb}</span>
          </li>
        ))}
      </ol>
    );
  }
}

export default VerbList;
