import React, { Component } from 'react'
import { socialLinks } from '../../api/socialLinks';

export default class SocialLinks extends Component {
  render() {
    return (
      <section className="cid-reFjJm9bie" id="social-buttons2-r" data-rv-view="231">
        <div className="mbr-overlay" style={{opacity: 0.8, backgroundColor: "rgb(0, 0, 0)"}}></div>
        <div className="container">
          <div className="media-container-row">
            <div className="col-md-8 align-center">
              <h2 className="pb-3 mbr-fonts-style display-2"><strong>{socialLinks.title}</strong></h2>
              <div className="social-list pl-0 mb-0">
                { socialLinks.icons.map(icon => (
                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                    <span className={`px-2 mbr-iconfont mbr-iconfont-social socicon-${icon.icon} socicon`} media-simple="true"></span>
                  </a>
                )) }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
