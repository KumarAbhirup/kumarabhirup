import React, { Component } from 'react'
import { Element } from 'react-scroll'

export default class Faq extends Component {
  render() {
    return (
      <Element name="uses" id="uses">
        <section className="toggle1 cid-reFxJtCX7a" id="toggle1-y" data-rv-view="257">
              <div className="container">
                  <div className="media-container-row">
                      <div className="col-12 col-md-8">
                          <div className="section-head text-center space30">
                            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                            <h2 className="mbr-section-title pb-5 mbr-fonts-style display-2">🤩 Here's the List... SORTED!</h2>
                          </div>
                          <div className="clearfix"></div>
                          <div id="bootstrap-toggle" className="toggle-panel accordionStyles tab-content">
                              <div className="card">
                                  <div className="card-header" role="tab" id="headingOne">
                                      <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse1_3" aria-expanded="false" aria-controls="collapse1">
                                          <h4 className="mbr-fonts-style display-5">
                                              <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;Devices and Accessories</h4>
                                      </a>
                                  </div>
                                  <div id="collapse1_3" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingOne">
                                      <div className="panel-body p-4">
                                          <p className="mbr-fonts-style panel-text display-7">
                                            I use <strong>MacBook Air&nbsp;</strong>💻&nbsp; for coding. <br /><strong>Oppo F7</strong>📱... Yes, I do use Android!<br/ ><strong>Lenovo Tablet</strong> for watching courses.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-header" role="tab" id="headingTwo">
                                      <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse2_3" aria-expanded="false" aria-controls="collapse2">
                                          <h4 className="mbr-fonts-style display-5">
                                              <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;Coding/Editor...</h4>
                                      </a>

                                  </div>
                                  <div id="collapse2_3" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingTwo">
                                      <div className="panel-body p-4">
                                          <p className="mbr-fonts-style panel-text display-7">
                                            For every JavaScript or PHP project, <strong>VSCode is my go-to choice</strong>. Never regreted leaving Atom ecosystem... VSCode is by far the best including IntelliSense.<br />I use Ahmad Awais' <strong>Shades of Purple VSCode theme</strong> that looks incredibly cool...</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-header" role="tab" id="headingThree">
                                      <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse3_3" aria-expanded="false" aria-controls="collapse3">
                                          <h4 className="mbr-fonts-style display-5">
                                              <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;Terminal</h4>
                                      </a>
                                  </div>
                                  <div id="collapse3_3" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                      <div className="panel-body p-4">
                                          <p className="mbr-fonts-style panel-text display-5"><strong>*</strong> I use <strong>Hyper Terminal</strong> instead of the normal OSX terminal. It does face few issues, but it's great once solved.&nbsp;😉<br/><br/><strong>*</strong> I have recently switched to <em><strong>ohmyzsh</strong></em> and <strong>zsh </strong>for doing terminal operations.<br /><br /><strong>*</strong> I have configured <strong>WesBos' Cobalt2 Theme for HyperTerm </strong>which uses <strong>Powerline fonts for terminal</strong>.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-header" role="tab" id="headingThree">
                                      <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse4_3" aria-expanded="false" aria-controls="collapse4">
                                          <h4 className="mbr-fonts-style display-5">
                                              <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;Developer utilities</h4>
                                      </a>
                                  </div>
                                  <div id="collapse4_3" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                      <div className="panel-body p-4">
                                          <p className="mbr-fonts-style panel-text display-7">Babel, ESLint, WebPack, Prettier is what I use for doing good to my code.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="card">
                                  <div className="card-header" role="tab" id="headingThree">
                                      <a role="button" className="collapsed panel-title text-black" data-toggle="collapse" data-parent="#accordion" data-core="" href="#collapse5_3" aria-expanded="false" aria-controls="collapse5">
                                          <h4 className="mbr-fonts-style display-5">
                                              <span className="sign mbr-iconfont mbri-arrow-down inactive"></span>&nbsp;Resources</h4>
                                      </a>
                                  </div>
                                  <div id="collapse5_3" className="panel-collapse noScroll collapse" role="tabpanel" aria-labelledby="headingThree">
                                      <div className="panel-body p-4">
                                          <p className="mbr-fonts-style panel-text display-5"><strong>*</strong> For learning JavaScript and Node.JS, I have always <strong>watched YouTube tutorials</strong> and preferred not buying premium courses.<br /><br /><strong>*</strong> Recently, I completed <strong>WesBos' Advanced React course</strong> to learn about React.JS, Next.JS, and GraphQL/Prisma.<br /><br /><strong>* </strong>Reading a lot of blog posts helped me a ton to learn things by myself. <strong>Will list many here soon</strong>!</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </section>
      </Element>
    )
  }
}
