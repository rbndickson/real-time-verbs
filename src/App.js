import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import VerbList from "./VerbList";
import Practise from "./Practise";
import SharedExercise from "./SharedExercise";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">Verbs Challenge</h1>
          </Link>
        </header>
        <main>
          <Route exact path="/data/verbs" component={VerbList} />
          <Route path="/shared/:token" component={SharedExercise} />
          <Route exact path="/" component={Practise} />
        </main>
      </div>
    );
  }
}

export default App;
