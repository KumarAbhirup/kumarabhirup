import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import PortfolioExtended from '../components/mobirise/PortfolioExtended';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';

import { title, iconsAndLabels, arrowTakesWhere, button } from '../api/pageLanding'

export default class portfolioPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PageLanding title={title.portfolio} iconsAndLabels={iconsAndLabels.portfolio} arrowTakesHere={arrowTakesWhere.portfolio} button={button.all} />
        <PortfolioExtended />
        <Banner/>
        <Contact />
      </>
    )
  }
}