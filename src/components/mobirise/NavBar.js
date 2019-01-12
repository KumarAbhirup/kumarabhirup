import React, { Component } from 'react'

export default class NavBar extends Component {

  images = {
    kumar: `${process.env.PUBLIC_URL}/prebuilt/images/kumar-1024x1024.jpg`
  }

  render() {
    return (
      <section className="menu cid-reFueG3rgB" once="menu" id="menu2-v" data-rv-view="252">
        <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className="menu-logo">
                <div className="navbar-brand">
                    <span className="navbar-logo">
                        <a href="/">
                            <img src={this.images.kumar} alt="Kumar Abhirup" title="" media-simple="true" style={{height: "5.1rem"}} />
                        </a>
                    </span>
                    <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-4" href="https://kumarabhirup.com">KUMAR ABHIRUP</a></span>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true"><li className="nav-item">
                        <a className="nav-link link text-black display-4" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link text-black display-4" href="/portfolio">Portfolio</a>
                    </li></ul>
                <div className="navbar-buttons mbr-section-btn"><a className="btn btn-sm btn-primary display-4" href="https://twitter.com/intent/follow?screen_name=kumar_abhirup" target="_blank" rel="noopener noreferrer"><span className="socicon socicon-twitter mbr-iconfont mbr-iconfont-btn"></span>Follow @kumar_abhirup</a></div>
            </div>
        </nav>
      </section>
    )
  }

}
