import React, { Component } from 'react';

import Router from './Router';
import Footer from './mobirise/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Router onUpdate={() => window.scrollTo(0, 0)} />
        <Footer />
      </>
    );
  }
}

export default App;
