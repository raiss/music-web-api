import './Fader.css'
import React, { Component } from 'react';

export class Fader extends Component {
  render() {
    return (
      <input
        className="fader-slider"
        type="range"
        min={this.props.min || "1"}
        max={this.props.max || "1760"}
        step={this.props.step || "1"}
        onChange={this.props.onChange}/>
    );
  }
}
