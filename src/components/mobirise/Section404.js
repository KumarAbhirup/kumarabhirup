import React, { Component } from 'react'
import { Element } from 'react-scroll'

import { page404 } from '../../api/others'

export default class Section404 extends Component {
  render() {
    return (
    <Element name="404" id="404">
      <section class="mbr-section content4 cid-reFZ9g1O80" id="content4-1h" data-rv-view="291">
          <div class="container">
              <div class="media-container-row">
                  <div class="title col-12 col-md-8">
                      <h2 class="align-center pb-3 mbr-fonts-style display-2">{ page404.title }</h2>
                      <h3 class="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">{ page404.body }</h3>
                  </div>
              </div>
          </div>
      </section>
    </Element>
    )
  }
}
