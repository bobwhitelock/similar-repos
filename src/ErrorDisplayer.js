import React, { Component } from 'react';

class ErrorDisplayer extends Component {

  render() {
    const {error} = this.props
    console.log(error) // eslint-disable-line no-console

    return (
      <div>
        {error.message}
      </div>
    );
  }
}

export default ErrorDisplayer;
