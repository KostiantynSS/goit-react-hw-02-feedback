import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
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
    );
  }
}

export default FeedbackOptions;
