import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateToken } from "./utils/helpers";
import Exercise from "./Exercise";

class Practise extends Component {
  render() {
    const Fragment = React.Fragment;

    return (
      <Fragment>
        <Link
          to={`shared/${generateToken(8)}`}
          className="dib link f6 mv3 br3 ph2 pv1 white bg-green bg-animate hover-bg-dark-green pointer"
        >
          Create Shared Practise
        </Link>
        <Exercise />
      </Fragment>
    );
  }
}

export default Practise;
