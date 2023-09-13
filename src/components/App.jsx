import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
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
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.statisticBtnHandler}
        />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
