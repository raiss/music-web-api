import React, { Component } from 'react';

import { OscillatorService }  from '../audioServices/SimpleOscillator.service';
import { GenericButton }  from '../components/GenericButton';
import { Fader }  from './Fader';

import './Oscillator.css';

export class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.simpleOscillator = new OscillatorService();
    this.simpleOscillator.start();
    this.state = {
      inputVal: "220",
      isMute: false
    };
  }

  waveform(type) {
    console.log("type: ", type);
    this.simpleOscillator.waveform(type);
    this.simpleOscillator.waveform(type);
  }

  modulate(e) {
    this.setState({inputVal: e.target.value});
    this.simpleOscillator.modulate(e.target.value);
  }

  mute() {
    this.setState({isMute: !this.state.isMute});
    let vol = this.state.isMute ? 1 : 0;
    this.simpleOscillator.gain(vol);
  }

  changeType(type) {
    this.props.waveform(type);
  }

  render() {
    return (
      <div>
        <div>Oscillator Component</div>
        <GenericButton onTouchTap={this.waveform.bind(this, "sine")}><div className="oscillator-waveform"> sine </div></GenericButton>
        <GenericButton onTouchTap={this.waveform.bind(this, "square")}><div className="oscillator-waveform"> square </div></GenericButton>
        <GenericButton onTouchTap={this.waveform.bind(this, "sawtooth")}><div className="oscillator-waveform"> sawtooth </div></GenericButton>
        <GenericButton onTouchTap={this.waveform.bind(this, "triangle")}><div className="oscillator-waveform"> triangle </div></GenericButton>

        <GenericButton onTouchTap={this.mute.bind(this)}><div className="oscillator-mute"> {this.state.isMute ? "unmute" : "mute"} </div></GenericButton>
        <hr/>
        <div>{this.state.inputVal + " Hz"}</div>
        <Fader onChange={this.modulate.bind(this)}></Fader>
      </div>
    )
  }
}
