import './Gain.css';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

// import { GainService }  from '../audioServices/SimpleGain.service';
import { GenericButton }  from '../components/GenericButton';
import { Fader }  from './Fader';
import { Controller }  from './Controller';

const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

@DragSource("ItemTypes.CARD", cardSource, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
})
export default class Gain {
  constructor(props) {
    super(props);
    this.state = {
      isMute: false
    };
  }

  modulate(e) {
    this.setState({inputVal: e.target.value / 1000, isMute: false});
    this.props.gainNode.gain(this.state.inputVal)
  }

  mute() {
    this.setState({isMute: !this.state.isMute});
    let vol = this.state.isMute ? 1 : 0;
    this.props.gainNode.gain(vol)
  }

  render() {
    const { connectDragSource } = this.props;
    console.log('>>>>', this.props, "<<<");
    return connectDragSource(<Controller title="Gain Component">
        <div className="gain-container">
          <GenericButton onClick={this.mute.bind(this)}><div className="gain-mute">{this.state.isMute ? "unmute" : "mute"}</div></GenericButton>
          <Fader
            onChange={this.modulate.bind(this)}
            min={0}
            max={1000}
            step={10}
            ></Fader>
        </div>
      </Controller>)
  }
}
