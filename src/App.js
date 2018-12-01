import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div class="container">
            <h2 className="text-center display-4">See how far you can get.</h2>
            <Link to={"/trivia"}>Play</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
