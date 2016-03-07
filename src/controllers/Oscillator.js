import React, { Component } from 'react';

import './Oscillator.css';

export class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: "440"};
  }

  input(e) {
    this.setState({inputVal: e.target.value})
    this.props.modulator(e.target.value)
  }

  render() {
    return (
      <div>
        <div>Oscillator Component</div>
        <div>{this.state.inputVal + " Hz"}</div>
        <input className="oscillator-slider" type="range" min="1" max="3520" step="1"  onChange={this.input.bind(this)}/>
      </div>
    )
  }
}
