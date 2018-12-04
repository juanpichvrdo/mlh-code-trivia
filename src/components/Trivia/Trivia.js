import React, { Component } from "react";
import classNames from "classnames";
import TriviaQuestion from "./TriviaQuestion";

import "./trivia.css";

class Trivia extends Component {
  state = {
    triviaIsPlaying: true,
    triviaData: [],
    correctAnswers: 0,
    wrongAnswers: 0,
    activeQuestion: 0
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/http://triviamlh.herokuapp.com/api/trivias/1"
      );
      const triviaData = await response.json();
      this.setState({ triviaData });
    } catch (e) {
      console.log(e);
    }
  };

  processAnswer = result => {
    if (result === "correct") {
      this.setState(prevState => {
        return { correctAnswers: prevState.correctAnswers + 1 };
      });
    } else if (result === "incorrect") {
      this.setState(prevState => {
        return { wrongAnswers: prevState.wrongAnswers + 1 };
      });
      if (this.state.wrongAnswers === 3) {
        this.setState({ triviaIsPlaying: false });
      }
    }
  };

  manipulateClass = index => {
    this.setState({ activeQuestion: index + 1 });
  };

  render() {
    const {
      triviaData,
      triviaIsPlaying,
      correctAnswers,
      wrongAnswers,
      activeQuestion
    } = this.state;

    // const questionClass = classNames({
    //   activeQuestion: activeQuestion === this.index,
    //   question: true,
    //   removeQuestion: activeQuestion > this.index
    // });

    return (
      <div>
        <div className="container">
          {triviaIsPlaying && (
            <React.Fragment>
              <p>Correct Answers: {correctAnswers}</p>
              <p>You have {4 - wrongAnswers} tries left</p>
            </React.Fragment>
          )}
          <div className="questionsContainer">
            {triviaIsPlaying ? (
              triviaData.map((question, index) => (
                <div
                  key={index}
                  className={classNames({
                    activeQuestion: activeQuestion === index,
                    question: true,
                    removeQuestion: activeQuestion > index
                  })}
                >
                  <TriviaQuestion
                    className="activeQuestion"
                    processAnswer={this.processAnswer}
                    manipulateClass={this.manipulateClass.bind(this, index)}
                    triviaData={question}
                  />
                </div>
              ))
            ) : (
              <p>You had {correctAnswers} correct answers!</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// <p>You had {correctAnswers} correct answers!</p>

export default Trivia;
