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
  total = 0;

  render() {
    let array = this.props.data;

    array.data.map((sum) => {
      this.total += sum.value;
    });
    return <div>{<h1>{this.total}</h1>}</div>;
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

  onIncrement = (index, value) => {
    //
    console.log(`I called ${index}`);
    //
    let temp = this.state;
    temp.data[index].value = ++value;
    console.log(`Value is ${value}`);
    this.setState(temp);
  };
  onDecrement = (index, value) => {
    //
    console.log(`D called ${index}`);
    //
    let temp = this.state;
    console.log(temp.data[index].value);

    temp.data[index].value = --value;
    this.setState(temp);
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
        <Total data={this.state} />
      </>
    );
  }
}

export default App;
