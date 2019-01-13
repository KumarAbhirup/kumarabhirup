import React, { Component } from 'react'

import { meta } from '../../api/meta'
import { navBar } from '../../api/navBar'
import toCapitalCase from '../../lib/toCapitalCase';

export default class NavBar extends Component {

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
                        <a href={meta.domain}>
                            <img src={navBar.logo} alt={meta.name} title={meta.name} media-simple="true" style={{height: "5.1rem"}} />
                        </a>
                    </span>
                    <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-4" href={meta.domain}>{ meta.name.toUpperCase() }</a></span>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                    { navBar.menu.map(item => (
                        <li className="nav-item">
                            <a className="nav-link link text-black display-4" href={`${meta.domain}${item.link}`}>{ toCapitalCase(item.name) }</a>
                        </li>
                    )) }
                </ul>
                { navBar.specialButton }
            </div>
        </nav>
      </section>
    )
  }

}
