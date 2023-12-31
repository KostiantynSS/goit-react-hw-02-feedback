import { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h2 className="title">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
