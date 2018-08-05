import React, { Component } from "react";
import { Link } from "react-router-dom";
import { generateToken } from "./utils/helpers";
import Modal from "./Modal";
import Exercise from "./Exercise";

class Practise extends Component {
  state = {
    token: "",
    showLinkModal: false
  };

  componentDidMount() {
    const token = generateToken(8);

    this.setState({ token });
  }

  createSharedPractise() {}

  render() {
    const Fragment = React.Fragment;

    return (
      <Fragment>
        {this.state.showLinkModal && (
          <Modal
            closeModal={() =>
              this.setState({
                showLinkModal: false
              })
            }
          >
            <ol>
              <li>
                <p>Share this link: </p>
                <p>{`${window.location}shared/${this.state.token}`}</p>
              </li>
              <li>
                <Link to={`shared/${this.state.token}`} className="dib link">
                  Go to shared exercise
                </Link>
              </li>
            </ol>
          </Modal>
        )}
        <div
          onClick={() =>
            this.setState({
              showLinkModal: true
            })
          }
          className="dib link f6 mv3 br3 ph2 pv1 white bg-green bg-animate hover-bg-dark-green pointer"
        >
          Create Shared Practise
        </div>
        <Exercise />
      </Fragment>
    );
  }
}

export default Practise;
