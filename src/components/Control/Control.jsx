import { Component } from 'react';
import css from './control.module.css';
import StatData from 'components/StatData/StatData';
import Statistics from 'components/Statistics/Statistics';
class Control extends Component {
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
        <Statistics />
        <StatData
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
export default Control;
