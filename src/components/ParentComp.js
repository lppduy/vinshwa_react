import React, { Component, PureComponent } from 'react';
import PureComp from '../PureComp';
import MemoComp from './MemoComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'lppduy',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'lppduy',
      });
    }, 2000);
  }

  render() {
    console.log('*****************parent render*************************');

    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
