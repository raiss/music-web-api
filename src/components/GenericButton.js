import './GenericButton.css'
import React, { Component } from 'react';
import { debounce } from 'lodash';

export class GenericButton extends Component {
  render() {
    return (
      <div onTouchTap={this.props.onClick} className='genericbutton-container'>
        { this.props.children }
      </div>
    );
  }
}
