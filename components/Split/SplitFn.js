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
