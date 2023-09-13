import { Component } from 'react';
import css from './notification.module.css';
class Notification extends Component {
  render() {
    return <p className={css.message}>{this.props.message}</p>;
  }
}
export default Notification;
