import React, { Component } from 'react'
import KumarAbhirup from '../../assets/images/kumar.jpeg'

export default class WhoAmI extends Component {
  render() {
    return (
      <section className="toggle2 cid-rezPziFdFs" id="toggle2-o next" data-rv-view="228">
              <div className="container">
                  <div className="media-container-row">
                          <div className="toggle-content">
                              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                              <h2 className="mbr-section-title pb-3 align-left mbr-fonts-style display-2">👁️‍🗨️ Who am I?</h2>
                              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                              <h3 className="mbr-section-subtitle align-left mbr-fonts-style display-5">
                                  I develop web apps, simple command line tools, and everything I feel could look fascinating! ☕</h3>
                              <div id="bootstrap-toggle" className="toggle-panel accordionStyles tab-content pt-5 mt-2">
                                  <div className="card">
                                      <div className="card-header" role="tab" id="headingOne">
                                          <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse1_8" aria-expanded="false" aria-controls="collapse1">
                                              <h4 className="mbr-fonts-style display-5">
                                                  <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;Am I not too young to code? 🖥️</h4>
                                          </a>
                                      </div>
                                      <div id="collapse1_8" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
                                          <div className="panel-body p-4">
                                              <p className="mbr-fonts-style panel-text display-7">I started learning web development since I was 12.<br /> I have never looked back then... 🙂 &nbsp;I'm 15 by now.<br />I love building and shipping stuffs. It's my hobby.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card">
                                      <div className="card-header" role="tab" id="headingTwo">
                                          <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse2_8" aria-expanded="false" aria-controls="collapse2">
                                              <h4 className="mbr-fonts-style display-5">
                                                  <span className="sign mbr-iconfont mbri-arrow-down inactive"></span> What are your everyday tools? 🤔<br /></h4>
                                          </a>
                                      </div>
                                      <div id="collapse2_8" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo">
                                          <div className="panel-body p-4">
                                              <p className="mbr-fonts-style panel-text display-7">
                                                Visit <a href="https://kumarabhirup.com/uses">kumarabhirup.com/uses</a>&nbsp;to get an insight of what dev tools, browser, terminal, apps and softwares I use.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card">
                                      <div className="card-header" role="tab" id="headingThree">
                                          <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse3_8" aria-expanded="true" aria-controls="collapse3">
                                              <h4 className="mbr-fonts-style display-5">
                                                  <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;What have I built till date? 🚀</h4>
                                          </a>
                                      </div>
                                      <div id="collapse3_8" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                          <div className="panel-body p-4">
                                              <p className="mbr-fonts-style panel-text display-7">Visit <a href="https://www.kumarabhirup.com/projects">kumarabhirup.com/projects</a> to check out my porfolio.&nbsp;😄</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="card">
                                      <div className="card-header" role="tab" id="headingThree">
                                          <a role="button" className="collapsed panel-title  text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse4_8" aria-expanded="false" aria-controls="collapse4">
                                              <h4 className="mbr-fonts-style display-5">
                                                  <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;My story 🏮</h4>
                                          </a>
                                      </div>
                                      <div id="collapse4_8" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                          <div className="panel-body p-4">
                                              <p className="mbr-fonts-style panel-text display-7">My story has been published at many places but the one I like is <a href="https://heropress.com/essays/life-designed-wordpress/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  
                              </div>
                          </div>
                      <div className="mbr-figure" style={{width: "104%"}}>
                          <img src={KumarAbhirup} alt="Kumar Abhirup" title="Kumar Abhirup" media-simple="true" />
                      </div>
                  </div>
              </div>
      </section>
    )
  }
}
