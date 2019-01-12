import React, { Component } from 'react'

import HomepageParallax from '../components/mobirise/HomepageParallax';
import WhoAmI from '../components/mobirise/WhoAmI';
import SocialLinks from '../components/mobirise/SocialLinks';
import Skills from '../components/mobirise/Skills';
import Portfolio from '../components/mobirise/Portfolio';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';
import Activities from '../components/mobirise/Activities';
import Footer from '../components/mobirise/Footer';

export default class homePage extends Component {
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
    )
  }
}
