import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Modal from "./Modal";
import Info from "./Info";
import VerbList from "./VerbList";
import Practise from "./Practise";
import SharedExercise from "./SharedExercise";

class App extends Component {
  state = {
    isInfoMode: false
  };

  openModal() {
    this.setState({ isInfoMode: true });
  }

  closeModal() {
    this.setState({ isInfoMode: false });
  }

  render() {
    return (
      <div>
        {this.state.isInfoMode && (
          <Modal closeModal={() => this.closeModal()}>
            <Info />
          </Modal>
        )}
        <header className="h3 bg-blue tc pt3">
          <Link to="/" className="f2 white no-underline">
            Verbs Challenge
          </Link>
          <div className="fr mr3" onClick={() => this.openModal()}>
            <i className="f2 fas fa-info-circle white pointer" />
          </div>
        </header>
        <main className="mw7 center">
          <Route exact path="/data/verbs" component={VerbList} />
          <Route path="/shared/:token" component={SharedExercise} />
          <Route exact path="/" component={Practise} />
        </main>
        <div className="tc moon-gray">
          Made by{" "}
          <a href="http://rbndickson.tech" className="light-blue">
            rbn
          </a>
        </div>
      </div>
    );
  }
}

export default App;
