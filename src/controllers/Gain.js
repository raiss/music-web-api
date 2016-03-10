import React, { Component } from 'react';

// import { GainService }  from '../audioServices/SimpleGain.service';
import { GenericButton }  from '../components/GenericButton';
import { Fader }  from './Fader';
import { Controller }  from './Controller';

import './Gain.css';

export class Gain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMute: false
    };
  }

  modulate(e) {
    this.setState({inputVal: e.target.value});
  }

  mute() {
    this.setState({isMute: !this.state.isMute});
    let vol = this.state.isMute ? 1 : 0;
  }

  render() {
    return (
      <Controller title="Gain Component">
        <div className="gain-container">
          <GenericButton onClick={this.mute.bind(this)}><div className="gain-mute">{this.state.isMute ? "unmute" : "mute"}</div></GenericButton>
          <Fader onChange={this.modulate.bind(this)}></Fader>
        </div>
      </Controller>
    )
  }
}
