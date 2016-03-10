import './Controller.css'
import React, { Component } from 'react';

export class Controller extends Component {
  render() {
    return (
      <div className='controller-container'>
        <h2>{ this.props.title }</h2>
        <div className="controller-children">
          { this.props.children }
        </div>
      </div>
    );
  }
}
