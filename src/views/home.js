import React, { Component } from 'react'

import { homeLandingPage } from '../api/pageLanding';
import { activities } from '../api/activities';
import { contactSection } from '../api/others';
import { banner } from '../api/banner';
import { portfolio } from '../api/portfolio';
import { skills } from '../api/skills';
import { socialLinks } from '../api/socialLinks';
import { aboutMe } from '../api/about';

import HomepageParallax from '../components/mobirise/HomepageParallax';
import About from '../components/mobirise/About';
import SocialLinks from '../components/mobirise/SocialLinks';
import Skills from '../components/mobirise/Skills';
import Portfolio from '../components/mobirise/Portfolio';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';
import Activities from '../components/mobirise/Activities';

export default class homePage extends Component {
  render() {
    return (
      <>
        <HomepageParallax {...homeLandingPage} />
        <About data={aboutMe} />
        <SocialLinks data={socialLinks} />
        <Skills data={skills} />
        <Portfolio data={portfolio} />
        <Banner data={banner} />
        <Contact data={contactSection} />
        <Activities data={activities} />
      </>
    )
  }
}
