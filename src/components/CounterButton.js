import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  updateCount = () => {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  };

  render() {
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.counter}
      </button>
    );
  }
}

export default CounterButton;
