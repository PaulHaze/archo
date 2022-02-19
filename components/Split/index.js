// import React from 'react';

// export class Split extends React.Component {
//   target = React.createRef();

//   split = () => {
//     if (this.target.current) {
//       Splitting({ target: this.target.current });
//     }
//   };

//   componentDidMount = this.split;
//   componentDidUpdate = this.split;

//   render() {
//     const { children } = this.props;
//     // return <div>{children}</div>;
//     return <div ref={this.target}>{children}</div>;
//   }
// }

/* eslint-disable no-undef */
import { createRef, useEffect } from 'react';

export function SplitFn({ children }) {
  const target = createRef();

  const split = () => {
    if (target.current) {
      Splitting({ target: target.current });
    }
  };

  useEffect(() => split());

  return <div ref={target}>{children}</div>;
}
