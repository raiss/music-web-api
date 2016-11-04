import './Graph.css'
import React, { Component } from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { map } from 'lodash-fp';
import Node from './node';

const squareTarget = {
  drop(props, e, i) {
    console.log('props >>>', props, e, i);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    clientOffset: monitor.getClientOffset()
  };
}

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
  }

  generateGraph() {
    const graphData = this.props.data;
    return map(::this._renderNode, graphData);
  }

  _renderNode(node) {
    const { width, height } = this.state;

    return (
      <Node node={node} windowSize={{ width, height }}>{node.title}</Node>
    );

  }

  render() {
    const { connectDropTarget, clientOffset, isOver } = this.props;
    console.log(clientOffset, isOver, '<<<<');
    return connectDropTarget(
      <div className='container'>
        {::this.generateGraph()}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DropTarget('NODE', squareTarget, collect)(Graph));
