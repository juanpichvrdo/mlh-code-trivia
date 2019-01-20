import React, { Component } from "react";

class TriviaQuestion extends Component {
  state = {
    answer: "",
    correct_answer: this.props.triviaData.correct_answer,
    wasCorrect: false,
    wasIncorrect: false,
    questionWasAnswered: false
  };

  checkAnswer = e => {
    e.preventDefault();
    this.setState({ questionWasAnswered: true });

    if (this.state.answer === this.state.correct_answer) {
      this.props.processAnswer("correct");
      this.setState({ wasCorrect: true });
    } else {
      this.props.processAnswer("incorrect");
      this.setState({ wasIncorrect: true });
    }
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // nextQuestion = () => {
  //   this.props.manipulateClass();
  // };

  nextQuestion = () => this.props.manipulateClass();

  render() {
    const { triviaData } = this.props;
    const {
      correct_answer,
      wasCorrect,
      wasIncorrect,
      questionWasAnswered
    } = this.state;
    return (
      <div>
        <form onSubmit={this.checkAnswer}>
          <div className="answers">
            <p className="lead">{triviaData.question}</p>
            <div>
              <input
                type="radio"
                value={triviaData.answer0}
                onChange={this.handleOnChange}
                name="answer"
                className="answerBtn"
                id={triviaData.answer0}
                disabled={questionWasAnswered}
              />
              <label htmlFor={triviaData.answer0} className="answerBtn">
                {triviaData.answer0}
              </label>
            </div>

            <div>
              <input
                type="radio"
                value={triviaData.answer1}
                onChange={this.handleOnChange}
                name="answer"
                className="answerBtn"
                id={triviaData.answer1}
                disabled={questionWasAnswered}
              />
              <label htmlFor={triviaData.answer1} className="answerBtn">
                {triviaData.answer1}
              </label>
            </div>

            <div>
              <input
                type="radio"
                value={triviaData.answer2}
                onChange={this.handleOnChange}
                name="answer"
                className="answerBtn"
                id={triviaData.answer2}
                disabled={questionWasAnswered}
              />
              <label htmlFor={triviaData.answer2} className="answerBtn">
                {triviaData.answer2}
              </label>
            </div>

            <div>
              <input
                type="radio"
                value={triviaData.answer3}
                onChange={this.handleOnChange}
                name="answer"
                className="answerBtn"
                id={triviaData.answer3}
                disabled={questionWasAnswered}
              />
              <label htmlFor={triviaData.answer3} className="answerBtn">
                {triviaData.answer3}
              </label>
            </div>
          </div>

          {!questionWasAnswered && (
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          )}

          {wasCorrect && <p>Correct!</p>}
          {wasIncorrect && <p>Incorrect :/</p>}
        </form>
        {questionWasAnswered && (
          <button
            className="btn btn-info"
            type="submit"
            onClick={this.nextQuestion}
          >
            Next Question
          </button>
        )}
        {wasIncorrect && <p>Correct Answer: {correct_answer} </p>}
      </div>
    );
  }
}

export default TriviaQuestion;
