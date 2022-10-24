import React, { Component } from 'react';
import './Counter.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
export class Counter extends Component<{}, { count: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render(): JSX.Element {
    const { count } = this.state;

    return (
      <div className="container counter-container">
        <button
          type="button"
          className="increment"
          onClick={(): void =>
            this.setState((state) => ({
              count: state.count + 1,
            }))
          }
        >
          +1
        </button>
        <output>{count}</output>
        <button
          type="button"
          className="decrement"
          onClick={(): void =>
            this.setState((state) => ({
              count: state.count - 1,
            }))
          }
        >
          -1
        </button>
      </div>
    );
  }
}
