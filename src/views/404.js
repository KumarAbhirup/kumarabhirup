import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import Section404 from '../components/mobirise/Section404';

import { page404LandingPage } from '../api/pageLanding'

export default class page404 extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PageLanding {...page404LandingPage} />
        <Section404 />
      </>
    )
  }
}
