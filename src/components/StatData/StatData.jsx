import css from './statData.module.css';
import { Component } from 'react';

class StatData extends Component {
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={css.stat}>
        <p>
          Good: <span>{this.props.good}</span>
        </p>
        <p>
          Neutral: <span>{this.props.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.props.bad}</span>
        </p>
        <p>
          Total: <span>{this.props.total}</span>
        </p>
        <p>
          Positive feedback: <span>{this.props.percentage}</span>
        </p>
      </div>
    );
  }
}
export default StatData;
