/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import styles from './index.module.css';

const { clock } = styles;

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    const { time } = this.state;

    return <h2 className={clock}>{time}</h2>;
  }
}

export default Clock;
