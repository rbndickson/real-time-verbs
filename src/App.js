import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import VerbList from "./VerbList";
import Practise from "./Practise";
import SharedExercise from "./SharedExercise";

class App extends Component {
  render() {
    return (
      <div>
        <header className="h3 bg-blue tc pt3">
          <Link to="/" className="f2 white no-underline">
            Verbs Challenge
          </Link>
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
