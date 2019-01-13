import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import Faq from '../components/mobirise/FAQ';
import Banner from '../components/mobirise/Banner';
import Contact from '../components/mobirise/Contact';
import Footer from '../components/mobirise/Footer';

export default class usesPage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PageLanding />
        <Faq />
        <Banner/>
        <Contact />
      </>
    )
  }
}
