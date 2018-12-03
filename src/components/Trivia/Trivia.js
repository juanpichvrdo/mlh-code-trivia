import React, { Component } from "react";
import TriviaQuestion from "./TriviaQuestion";

class Trivia extends Component {
  state = {
    gameIsPlaying: true,
    triviaData: [],
    answer: "",
    score: 0,
    wrongAnswers: 0
  };

  processAnswer = result => {
    if (result === "correct") {
      this.setState(prevState => {
        return { score: prevState.score + 1 };
      });
    } else if (result === "incorrect") {
      this.setState(prevState => {
        return { wrongAnswers: prevState.wrongAnswers + 1 };
      });
      if (this.state.wrongAnswers === 3) {
        this.setState({ gameIsPlaying: false });
      }
    }
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/http://triviamlh.herokuapp.com/api/trivias/1"
      );
      const triviaData = await response.json();

      this.setState({ triviaData });
      console.log(triviaData);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <p>Score: {this.state.score}</p>
          <p>You have {4 - this.state.wrongAnswers} tries left</p>
          {this.state.gameIsPlaying &&
            this.state.triviaData.map(question => (
              <TriviaQuestion
                key={question.question}
                processAnswer={this.processAnswer}
                triviaData={question}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Trivia;
