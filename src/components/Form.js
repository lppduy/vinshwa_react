import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topic: 'angular',
    };
  }

  handleUsernameChange = event => {
    //
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="">Comment</label>
          <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <label htmlFor="">Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

// 1. create component state
// 2. handle
