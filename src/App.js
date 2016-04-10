import React, { Component } from 'react';
import  { Oscillator }  from "./controllers/Oscillator";
import { OscillatorService }  from './audioServices/SimpleOscillator.service';
import  { Gain }  from "./controllers/Gain";
import { GainService }  from './audioServices/gain.service';


import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    let audioCtx = new AudioContext();
    this.simpleOscillator = new OscillatorService(audioCtx);
    this.gainService = new GainService(audioCtx);
  }

  render() {
    return (
      <div>
        <Gain gainNode={this.gainService}/>
        <Oscillator oscillatorNode={this.simpleOscillator} destination={this.gainService}/>
      </div>
    )
  }
}
