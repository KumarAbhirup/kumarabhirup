import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import Faq from '../components/mobirise/FAQ';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';

import { title, iconsAndLabels, arrowTakesWhere, button } from '../api/pageLanding'

export default class usesPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PageLanding title={title.uses} iconsAndLabels={iconsAndLabels.uses} arrowTakesHere={arrowTakesWhere.uses} button={button.all} />
        <Faq />
        <Banner/>
        <Contact />
      </>
    )
  }
}
