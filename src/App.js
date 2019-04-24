import React, { Component } from "react";
import "./App.css";
import Event from "./components/Event";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { eventSize: ["sm", "med", "lg"] };
  }

  randomEventSize = () => {
    let eventArray = this.state.eventSize;

    return eventArray[Math.floor(Math.random() * eventArray.length)];
  };
  generateEvent = () => {
    let size = this.randomEventSize();
    return <Event size={size} />;
  };
  render() {
    return <div className="App">{this.generateEvent()}</div>;
  }
}
