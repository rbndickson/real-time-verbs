import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateToken } from "./utils/helpers";
import Exercise from "./Exercise";

class Practise extends Component {
  render() {
    const Fragment = React.Fragment;

    return (
      <Fragment>
        <Link to={`shared/${generateToken(8)}`}>Create Shared Screen</Link>
        <Exercise />
      </Fragment>
    );
  }
}

export default Practise;
