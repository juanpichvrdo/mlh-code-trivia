import React, { Component } from "react";

class TriviaQuestion extends Component {
  state = {
    answer: "",
    correct_answer: this.props.triviaData.correct_answer,
    wasCorrect: false,
    wasIncorrect: false
  };

  checkAnswer = e => {
    e.preventDefault();
    this.props.manipulateClass();
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

  render() {
    const { triviaData } = this.props;
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
              />
              <label htmlFor={triviaData.answer3} className="answerBtn">
                {triviaData.answer3}
              </label>
            </div>
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
          {this.state.wasCorrect && <p>Correct!</p>}
          {this.state.wasIncorrect && <p>Incorrect :/</p>}
        </form>
      </div>
    );
  }
}

export default TriviaQuestion;
