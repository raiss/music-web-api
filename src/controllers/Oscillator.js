import React, { Component } from 'react';

import { GenericButton }  from '../components/GenericButton';
import { Fader }  from './Fader';
import { Controller }  from './Controller';

import './Oscillator.css';

export class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.simpleOscillator = this.props.oscillatorNode;
    this.simpleOscillator.out(this.props.destination)
    this.simpleOscillator.start();
    this.state = {
      inputVal: "110",
      isMute: false
    };
  }

  waveform(type) {
    this.simpleOscillator.waveform(type);
    this.simpleOscillator.waveform(type);
  }

  modulate(e) {
    this.setState({inputVal: e.target.value});
    this.simpleOscillator.modulate(e.target.value);
  }

  render() {
    return (
      <Controller title="Oscillator Component">
        <div className="oscillator-buttons">
          <GenericButton onClick={this.waveform.bind(this, "sine")}><div className="oscillator-waveform">sine</div></GenericButton>
          <GenericButton onClick={this.waveform.bind(this, "square")}><div className="oscillator-waveform">square</div></GenericButton>
          <GenericButton onClick={this.waveform.bind(this, "sawtooth")}><div className="oscillator-waveform">sawtooth</div></GenericButton>
          <GenericButton onClick={this.waveform.bind(this, "triangle")}><div className="oscillator-waveform">triangle</div></GenericButton>
        </div>
        <div>{this.state.inputVal + " Hz"}</div>
        <Fader onChange={this.modulate.bind(this)}></Fader>
      </Controller>
    )
  }
}
