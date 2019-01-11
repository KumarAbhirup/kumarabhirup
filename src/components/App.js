import React, { Component } from 'react';

import HomepageParallax from './mobirise/HomepageParallax';
import WhoAmI from './mobirise/WhoAmI';
import SocialLinks from './mobirise/SocialLinks';
import Skills from './mobirise/Skills';
import Portfolio from './mobirise/Portfolio';
import Banner from './mobirise/Banner';
import Contact from './mobirise/Contact';
import Activities from './mobirise/Activities';
import Footer from './mobirise/Footer';

class App extends Component {
  render() {
    return (
      <>
        <HomepageParallax />
        <WhoAmI />
        <SocialLinks />
        <Skills />
        <Portfolio />
        <Banner />
        <Contact />
        <Activities />
        <Footer />
      </>
    );
  }
}

export default App;
