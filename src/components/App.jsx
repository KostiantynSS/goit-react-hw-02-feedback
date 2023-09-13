import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import css from './app.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statisticBtnHandler = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = ((this.state.good / total) * 100).toFixed() + '%';
    return percentage;
  };
  render() {
    return (
      <>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.controls}>
          <button
            type="button"
            className={css.button}
            name="good"
            onClick={this.statisticBtnHandler}
          >
            Good
          </button>
          <button
            type="button"
            className={css.button}
            name="neutral"
            onClick={this.statisticBtnHandler}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.button}
            name="bad"
            onClick={this.statisticBtnHandler}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
