import React, { Component } from "react";
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
      <ol className="w5 center">
        {this.state.verbs.map(verb => (
          <li key={verb} className="f4 mb2">
            <span>{verb}</span>
          </li>
        ))}
      </ol>
    );
  }
}

export default VerbList;
