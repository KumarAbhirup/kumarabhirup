import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import Section404 from '../components/mobirise/Section404';

import { page404LandingPage } from '../api/pageLanding'
import { navBar } from '../api/navBar';
import { page404Text } from '../api/others'

export default class page404 extends Component {
  render() {
    return (
      <>
        <NavBar data={navBar} />
        <PageLanding {...page404LandingPage} />
        <Section404 data={page404Text} />
      </>
    )
  }
}
