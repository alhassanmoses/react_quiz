import React, { Component } from "react";

// Counter Component
class Counter extends Component {
  render() {
    let { index, value, Increment, Decrement } = this.props;

    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button
            className="button is-danger is-small"
            onClick={() => Decrement(index, value)}
          >
            -
          </button>
          <button
            className="button is-success is-small"
            onClick={() => Increment(index, value)}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
class Total extends Component {
  render() {
    let { sum } = this.props;
    return <div>{<h1>sum of values is: {sum}</h1>}</div>;
  }
}

class App extends Component {
  // state data for 3 counters
  data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  constructor(props, context) {
    super(props, context);

    this.state = { data: [...this.data] };
  }
  //variable to store sum of values
  sum = 0;
  //function to get sum of values each time an increment or decrement is made
  getSum(arr) {
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
      val += arr[i].value;
    }
    this.sum = val;
  }

  //funtion to increment values
  onIncrement = (index, value) => {
    let temp = this.state;
    temp.data[index].value = ++value;
    this.setState(temp);
    this.getSum(temp.data);
  };

  //function to decrement values
  onDecrement = (index, value) => {
    let temp = this.state;

    temp.data[index].value = --value;

    this.setState(temp);
    this.getSum(temp.data);
  };

  render() {
    return (
      <>
        <div>
          {this.state.data.map((counter, key) => (
            <Counter
              key={key}
              index={counter.id - 1}
              value={counter.value}
              Increment={this.onIncrement}
              Decrement={this.onDecrement}
            />
          ))}
        </div>
        <Total sum={this.sum} />
      </>
    );
  }
}

export default App;
