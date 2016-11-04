import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import  { Oscillator }  from "./controllers/Oscillator";
import { OscillatorService }  from './audioServices/SimpleOscillator.service';
// import  { Gain }  from "./controllers/Gain";
import { GainService }  from './audioServices/gain.service';

import Graph from './components/Graph';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // let audioCtx = new AudioContext();
    // this.simpleOscillator = new OscillatorService(audioCtx);
    // this.gainService = new GainService(audioCtx);
    this.graphObj = {
      node1: {
        id: 1,
        title: "my node",
        type: "Oscillator",
        location: {
          x: 20,
          y: 10,
        },
      },
      node2: {
        id: 2,
        title: "your node",
        type: "firstType",
        location: {
          x: 60,
          y: 40,
        },
      },
      node3: {
        id: 3,
        title: "his node",
        type: "firstType",
        location: {
          x: 25,
          y: 20,
        },
      },

    }
  }

  render() {
    return (
      <div>
        {/* <Gain gainNode={this.gainService}/>
        <Oscillator oscillatorNode={this.simpleOscillator} destination={this.gainService}/> */}
        <Graph data={this.graphObj}/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App);
