import { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <ul className={css.controls}>
          {this.props.options.map(option => (
            <li key={option}>
              <button
                type="button"
                className={css.button}
                name={option}
                onClick={this.props.onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default FeedbackOptions;
