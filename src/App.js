import React, { Component } from 'react';
import { OscillatorService }  from './audioServices/SimpleOscillator.service';
import  { Oscillator }  from "./controllers/Oscillator";

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    console.log(OscillatorService);
    this.simpleOscillator1 = new OscillatorService();
    this.simpleOscillator1.start();
    this.simpleOscillator2 = new OscillatorService();
    this.simpleOscillator2.start();
  }

  modulate1(val) {
    this.simpleOscillator1.modulate(val)
  }

  modulate2(val) {
    this.simpleOscillator2.modulate(val)
  }

  render() {
    return (
      <div>
        <Oscillator modulator={this.modulate1.bind(this)}/>
        <Oscillator modulator={this.modulate2.bind(this)}/>
      </div>
    )
  }
}
