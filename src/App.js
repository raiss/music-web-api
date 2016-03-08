import React, { Component } from 'react';
import  { Oscillator }  from "./controllers/Oscillator";

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Oscillator/>
        <Oscillator/>
      </div>
    )
  }
}
