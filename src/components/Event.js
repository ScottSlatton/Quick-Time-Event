import React, { Component } from "react";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: true, number: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.number < 25) {
        this.setState({ number: this.state.number + 1 });
      } else {
        this.setState({ number: 0 });
      }
    }, 50);
  }

  handleClick = () => {
    clearInterval(this.interval);
    this.setState({ counter: false });
    console.log("You Gathered: ", this.state.number, "Ore.");
  };
  render() {
    if (this.state.counter) {
      return (
        <div className="circleBase type1" onClick={() => this.handleClick()} />
      );
    }
    return null;
  }
}
