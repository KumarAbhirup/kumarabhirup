import React, { Component } from 'react'
import { Link } from 'react-scroll'

import { meta } from '../../api/meta'
import { homeButtons, arrowTakesWhere, arrowIcon, homePageMarginTop } from '../../api/pageLanding'

export default class HomepageParallax extends Component {
  render() {
    return (
      <section className="cid-qAL8Ff2P8u mbr-fullscreen mbr-parallax-background" id="header2-f" data-rv-view="225">
        <div className="mbr-overlay" style={{ opacity: 0.7, backgroundColor: "rgb(35, 35, 35)" }}></div>
        <div className="container align-center" style={homePageMarginTop}>
          <div className="row justify-content-md-center">
            <div className="mbr-white col-md-10">
              <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">{ meta.name.toUpperCase() }</h1>
              <p className="mbr-text pb-3 mbr-fonts-style display-5">{ meta.tagline }</p>
              <div className="mbr-section-btn">
                <Link to={homeButtons[1].link} spy smooth duration={1000} offset={-50} className={`btn btn-md ${homeButtons[1].class} display-4`} href={`#${homeButtons[1].link}`}><span className={`${homeButtons[1].icon} mbr-iconfont mbr-iconfont-btn`}></span>{homeButtons[1].text}</Link>
                <Link to={homeButtons[2].link} spy smooth duration={1000} offset={-50} className={`btn btn-md ${homeButtons[2].class} display-4`} href={`#${homeButtons[2].link}`}><span className={`${homeButtons[2].icon} mbr-iconfont mbr-iconfont-btn`}></span>{homeButtons[2].text}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mbr-arrow hidden-sm-down" aria-hidden="true" style={{boxShadow: "0 0 10px white"}}>
          <Link to={arrowTakesWhere.home} spy smooth duration={1000} offset={-50} href={`#${arrowTakesWhere.home}`}>
              <i className={`${arrowIcon} mbr-iconfont`}></i>
          </Link>
        </div>
      </section>
    )
  }
}
