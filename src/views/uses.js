import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import Faq from '../components/mobirise/FAQ';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';

import { usesLandingPage } from '../api/pageLanding'
import { navBar } from '../api/navBar'
import { banner } from '../api/banner'
import { contactSection } from '../api/others'
import { uses } from '../api/uses';

export default class usesPage extends Component {
  render() {
    return (
      <>
        <NavBar data={navBar} />
        <PageLanding {...usesLandingPage} />
        <Faq {...uses} />
        <Banner data={banner} />
        <Contact data={contactSection} />
      </>
    )
  }
}
