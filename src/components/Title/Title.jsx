import css from './title.module.css';
import { Component } from 'react';
class Title extends Component {
  render() {
    return <h2 className={css.title}>Please leave feedback</h2>;
  }
}
export default Title;
