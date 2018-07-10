import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import InfoModal from "./InfoModal";
import InfoIcon from "./InfoIcon";
import VerbList from "./VerbList";
import Practise from "./Practise";
import SharedExercise from "./SharedExercise";

class App extends Component {
  state = {
    isInfoMode: false
  };

  toggleInfo() {
    this.setState(prevState => ({
      isInfoMode: !prevState.isInfoMode
    }));
  }

  render() {
    return (
      <div>
        <header className="h3 bg-blue tc pt3">
          <Link to="/" className="f2 white no-underline">
            Verbs Challenge
          </Link>
          <div className="fr mr3" onClick={() => this.toggleInfo()}>
            <InfoIcon />
          </div>
        </header>
        <main className="mw7 center">
          {this.state.isInfoMode && (
            <InfoModal closeInfo={() => this.closeInfo()} />
          )}
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
