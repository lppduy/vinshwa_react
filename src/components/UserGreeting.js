import React, { Component } from 'react';
import Message from './Message';

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome lppduy 🫅🏻</div>;

    // return this.state.isLoggedIn ? <div>Welcome lppduy 🫅🏻</div> : <div>Welcome Guest 🙏🏻</div>;

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome lppduy 🫅🏻</div>;
    // } else {
    //   message = <div>Welcome Guest 🙏🏻</div>;
    // }

    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome lppduy 🫅🏻</div>;
    // } else {
    //   return <div>Welcome Guest 🙏🏻</div>;
    // }

    // return (
    //   <>
    //     <div>Welcome lppduy</div>
    //     <div>Welcome Guest</div>
    //   </>
    // );

    // * 4 approaches to conditionally render UI in React:
    // 1/ defaults 2/ element variables 3/ ternary operator 4/ short-circuit operator => rcm: ternary + short-circuit
  }
}

export default UserGreeting;
