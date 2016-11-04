import './Node.css'
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const nodeSource = {
  beginDrag(props) {
    return {id: props.node.id};
  }
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Node extends Component {
  render() {
    const { node, windowSize, connectDragSource, isDragging } = this.props;
    const style = {
      transform: `translate(${(windowSize.width * node.location.x) / 100}px, ${(windowSize.height * node.location.y) / 100}px)` + (isDragging ? 'rotate(20deg)' :  'rotate(0)') ,
    }

    return connectDragSource(
      <div key={node.id} className="node_container" style={style} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default DragSource('NODE', nodeSource, collect)(Node);
