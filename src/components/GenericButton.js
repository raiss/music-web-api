import './GenericButton.css'
import React, { Component } from 'react';

export class GenericButton extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className='genericbutton-container'>
        { this.props.children }
      </div>
    );
  }
}
