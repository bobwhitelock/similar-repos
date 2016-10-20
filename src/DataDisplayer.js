import React, { Component } from 'react';
import JSONTree from 'react-json-tree';

class DataDisplayer extends Component {
  render() {
    return (
      <div>
        <JSONTree data={this.props.data}/>
      </div>
    );
  }
}

export default DataDisplayer
