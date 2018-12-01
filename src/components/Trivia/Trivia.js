import React, { Component } from "react";
import TriviaQuestion from "./TriviaQuestion";

class Trivia extends Component {
  state = {
    triviaData: {
      question: "What is the answer?",
      correct_answer: "Respuesta3",
      answer1: "Respuesta1",
      answer2: "Respuesta2",
      answer3: "Respuesta3",
      answer4: "Respuesta4"
    },
    answer: "",
    score: 0
  };

  processAnswer = result => {
    if (result === "correct") {
      this.setState(prevState => {
        return { score: prevState.score + 1 };
      });
    } else if (result === "incorrect") {
      this.setState(prevState => {
        return { score: prevState.score - 1 };
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <p>Score: {this.state.score}</p>
          <TriviaQuestion
            processAnswer={this.processAnswer}
            triviaData={this.state.triviaData}
          />
        </div>
      </div>
    );
  }
}

export default Trivia;
