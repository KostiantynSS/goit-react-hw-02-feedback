import { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
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
      </>
    );
  }
}
export default FeedbackOptions;
