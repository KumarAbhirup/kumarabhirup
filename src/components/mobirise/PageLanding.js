import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class PageLanding extends Component {
  render() {
    return (
      <section className="header12 cid-reFvVotcRe mbr-fullscreen mbr-parallax-background" id="header12-x" data-rv-view="254">
          <div className="mbr-overlay" style={{opacity: 0.6, backgroundColor: "rgb(0, 0, 0)"}}>
          </div>

          <div className="container  ">
                  <div className="media-container">
                      <div className="col-md-12 align-center">
                          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                          <h1 className="mbr-section-title pb-3 mbr-white mbr-bold mbr-fonts-style display-1"><br />Things I use 🦄</h1>
                          
                          <div className="mbr-section-btn align-center py-2"><a className="btn btn-md btn-secondary display-4" href="/#about"><span className="mbrib-user mbr-iconfont mbr-iconfont-btn"></span>WHO AM I?</a></div>

                          <div className="icons-media-container mbr-white">
                              <div className="card col-12 col-md-6 col-lg-3">
                                  <div className="icon-block">
                                  <a href="https://mobirise.com/">
                                      <span className="mbr-iconfont mbri-wifi" media-simple="true"></span>
                                  </a>
                                  </div>
                                  <h5 className="mbr-fonts-style display-5">
                                      Editing</h5>
                              </div>

                              <div className="card col-12 col-md-6 col-lg-3">
                                  <div className="icon-block">
                                      <a href="https://mobirise.com/">
                                          <span className="mbr-iconfont mbri-devices" media-simple="true"></span>
                                      </a>
                                  </div>
                                  <h5 className="mbr-fonts-style display-5">
                                      Hardware</h5>
                              </div>

                              <div className="card col-12 col-md-6 col-lg-3">
                                  <div className="icon-block">
                                      <a href="https://mobirise.com/">
                                          <span className="mbr-iconfont mbri-laptop" media-simple="true"></span>
                                      </a>
                                  </div>
                                  <h5 className="mbr-fonts-style display-5">
                                      Coding</h5>
                              </div>

                              <div className="card col-12 col-md-6 col-lg-3">
                                  <div className="icon-block">
                                      <a href="https://mobirise.com/">
                                          <span className="mbr-iconfont mbri-speed" media-simple="true"></span>
                                      </a>
                                  </div>
                                  <h5 className="mbr-fonts-style display-5">
                                      Other</h5>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>

          <div className="mbr-arrow hidden-sm-down" aria-hidden="true">
              <Link to="uses" spy smooth duration={1000} offset={-90} href="#uses">
                  <i className="mbri-down mbr-iconfont"></i>
              </Link>
          </div>
      </section>
    )
  }
}
