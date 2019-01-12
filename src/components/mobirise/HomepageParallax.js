import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class HomepageParallax extends Component {
  render() {
    return (
      <section className="cid-qAL8Ff2P8u mbr-fullscreen mbr-parallax-background" id="header2-f" data-rv-view="225">
        <div className="mbr-overlay" style={{ opacity: 0.7, backgroundColor: "rgb(35, 35, 35)" }}></div>
        <div className="container align-center">
          <div className="row justify-content-md-center">
            <div className="mbr-white col-md-10">
              <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">KUMAR ABHIRUP</h1>
              <p className="mbr-text pb-3 mbr-fonts-style display-5">A 15 year-old <strong>web developer</strong>&nbsp;👋🏻<br /></p>
              <div className="mbr-section-btn">
                <Link to='about' spy smooth duration={1000} offset={-50} className="btn btn-md btn-secondary display-4" href="#about"><span className="mbri-rocket mbr-iconfont mbr-iconfont-btn"></span>ABOUT ME</Link>
                <Link to='portfolio' spy smooth duration={1000} offset={-50} className="btn btn-md btn-white-outline display-4" href="#portfolio"><span className="mbri-devices mbr-iconfont mbr-iconfont-btn"></span>PORTFOLIO</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mbr-arrow hidden-sm-down" aria-hidden="true" style={{boxShadow: "0 0 10px white"}}>
          <Link to='about' spy smooth duration={1000} offset={-50} href="#next">
              <i className="mbrib-down mbr-iconfont"></i>
          </Link>
        </div>
      </section>
    )
  }
}
