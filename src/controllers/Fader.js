import './Fader.css'
import React, { Component } from 'react';

export class Fader extends Component {
  render() {
    return (
      <input className="fader-slider" type="range" min="1" max="3520" step="1"  onChange={this.props.onChange}/>
    );
  }
}
