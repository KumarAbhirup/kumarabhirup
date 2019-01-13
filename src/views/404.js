import React, { Component } from 'react'

import NavBar from '../components/mobirise/NavBar';
import PageLanding from '../components/mobirise/PageLanding';
import Section404 from '../components/mobirise/Section404';

import { title, iconsAndLabels, arrowTakesWhere, button } from '../api/pageLanding'

export default class page404 extends Component {
  render() {
    return (
      <>
        <NavBar />
        <PageLanding title={title.page404} iconsAndLabels={iconsAndLabels.page404} arrowTakesHere={arrowTakesWhere.page404} button={button.page404} />
        <Section404 />
      </>
    )
  }
}
