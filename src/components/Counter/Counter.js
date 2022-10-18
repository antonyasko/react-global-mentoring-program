import { Component } from "react";
import './Counter.css'

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <button
          className="increment"
          onClick={() => this.setState((state) => ({
            count: state.count + 1,
          }))}
        >
          +1
        </button>
        <output>{this.state.count}</output>
        <button
          className="decrement"
          onClick={() => this.setState((state) => ({
            count: state.count - 1,
          }))}
        >
          -1
        </button>
      </div>
    );
  }
}
