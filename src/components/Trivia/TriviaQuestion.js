import React, { Component } from "react";

class TriviaQuestion extends Component {
  state = {
    answer: "",
    correct_answer: this.props.triviaData.correct_answer
  };

  checkAnswer = e => {
    e.preventDefault();
    if (this.state.answer === this.state.correct_answer) {
      this.props.processAnswer("correct");
    } else {
      this.props.processAnswer("incorrect");
    }
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { triviaData } = this.props;
    return (
      <div className="triviaQuestion">
        <form onSubmit={this.checkAnswer}>
          <div className="answers">
            <p className="lead">{triviaData.question}</p>
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

            <input
              type="radio"
              value={triviaData.answer4}
              onChange={this.handleOnChange}
              name="answer"
              className="answerBtn"
              id={triviaData.answer4}
            />
            <label htmlFor={triviaData.answer4} className="answerBtn">
              {triviaData.answer4}
            </label>
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TriviaQuestion;
