import './Paralex.css'
import React, { Component } from 'react';

export default class Paralex extends Component {
  renderLayer(comp) {
    return (comp);
  }

  onScroll() {
    console.log('scrollling');
  }

  render() {
    return (
      <div className="paralex_container" onScroll={this.onScroll}>
        {this.renderLayer(<div className="paralex_layer1"></div>, 0)}
        {this.renderLayer(<div className="paralex_layer2"></div>, 1)}
      </div>
    );
  }
}
