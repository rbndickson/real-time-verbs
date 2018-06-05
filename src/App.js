import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import VerbList from "./VerbList";
import Exercise from "./Exercise";

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
          <Exercise />
        </main>
      </div>
    );
  }
}

export default App;
