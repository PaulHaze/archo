import React from 'react';

export class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.target.current) {
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    return <div ref={this.target}>{this.props.children}</div>;
  }
}
