import React, { Component } from 'react';
import logo from '../assets/images/kumar.jpeg';
import '../assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{borderRadius: '100%'}} />
          <p>
            kumarabhirup.com gets a headstart!
          </p>
          <a
            className="App-link"
            href="https://kumarabhirup.com"
            rel="noopener noreferrer"
          >
            Kumar Abhirup
          </a>
        </header>
      </div>
    );
  }
}

export default App;
