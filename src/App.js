import React, { Component } from 'react';

// import { Greet } from './components/Greet';
import Greet from './components/Greet';

import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Message /> */}
        <Greet name="Diana" heroName="Wonderwoman" />
        <Welcome name="Clark" heroName="Batman" />
        {/* <Greet name="Bruce" heroName="Superman">
          <p>This is children props.</p>
        </Greet>
        <Greet name="Clark" heroName="Batman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonderwoman" />
        <Welcome name="Bruce" heroName="Superman" />
    
        <Welcome name="Diana" heroName="Wonderwoman" /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
