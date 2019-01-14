import React, { Component } from 'react';

import Router from './Router';
import Footer from './mobirise/Footer';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  render() {
    return (
      <ScrollToTop>
        <Router onUpdate={() => window.scrollTo(0, 0)} />
        <Footer />
      </ScrollToTop>
    );
  }
}

export default App;
