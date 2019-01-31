import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import PortfolioExtended from '../components/mobirise/PortfolioExtended';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';

import { portfolioLandingPage } from '../api/pageLanding'
import { navBar } from '../api/navBar'
import { banner } from '../api/banner'
import { contactSection } from '../api/others'
import { portfolio } from '../api/portfolio'

export default class portfolioPage extends Component {
  render() {
    return (
      <>
        <NavBar data={navBar} />
        <PageLanding {...portfolioLandingPage} />
        <PortfolioExtended data={portfolio} />
        <Banner data={banner} />
        <Contact data={contactSection} />
      </>
    )
  }
}