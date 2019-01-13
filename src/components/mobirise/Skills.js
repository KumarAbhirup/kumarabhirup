import React, { Component } from 'react'

import { skills } from '../../api/skills';
import Skill from './Skill';

export default class Skills extends Component {
  render() {
    return (
      <section className="progress-bars3 cid-rezDHMdky7" id="progress-bars3-j" data-rv-view="234">

        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">{ skills.title }</h2>

          <h3 className="mbr-section-subtitle mbr-fonts-style display-5">{ skills.text }</h3>

          <div className="media-container-row pt-5 mt-2">{ skills.skills.map(skill => (<Skill skill={skill} />)) }</div>
        </div>
      </section>
    )
  }
}
