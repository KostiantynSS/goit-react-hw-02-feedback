import { Component } from 'react';

class Section extends Component {
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
