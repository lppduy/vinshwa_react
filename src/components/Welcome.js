import React, { Component } from 'react';

export class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} - {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;