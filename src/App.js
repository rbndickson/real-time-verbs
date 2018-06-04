import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import VerbList from "./VerbList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Verbs Challenge</h1>
        </header>
        <main>
          <Route exact path="/data/verbs" component={VerbList} />
        </main>
      </div>
    );
  }
}

export default App;
