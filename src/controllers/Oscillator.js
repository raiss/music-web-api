import React, { Component } from 'react';

import { OscillatorService }  from '../audioServices/SimpleOscillator.service';

import './Oscillator.css';

export class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.simpleOscillator = new OscillatorService();
    this.simpleOscillator.start();
    this.state = {inputVal: "440"};
  }

  waveform(type) {
    this.simpleOscillator.waveform(type);
    this.simpleOscillator.waveform(type);
  }

  modulate(e) {
    this.setState({inputVal: e.target.value});
    this.simpleOscillator.modulate(e.target.value);
  }

  mute() {
    // this.setState({muted: !this.state.muted});
    this.simpleOscillator.gain(0);
  }

  changeType( type) {
    console.log("change type: ", type);
    this.props.waveform(type);
  }

  render() {
    return (
      <div>
        <div>Oscillator Component</div>
        <div className="oscillator-waveform" onClick={this.waveform.bind(this, "sine")}> sine </div>
        <div className="oscillator-waveform" onClick={this.waveform.bind(this, "square")}> square </div>
        <div className="oscillator-waveform" onClick={this.waveform.bind(this, "sawtooth")}> sawtooth </div>
        <div className="oscillator-waveform" onClick={this.waveform.bind(this, "triangle")}> triangle </div>

        <div className="oscillator-mute" onClick={this.mute.bind(this)}> mute </div>
        <hr/>
        <div>{this.state.inputVal + " Hz"}</div>
        <input className="oscillator-slider" type="range" min="1" max="3520" step="1"  onChange={this.modulate.bind(this)}/>
      </div>
    )
  }
}
