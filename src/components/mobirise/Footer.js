import React, { Component } from 'react'

export default class Footer extends Component {

  images = {
    kumar: `${process.env.PUBLIC_URL}/prebuilt/images/kumar-1024x1024.jpg`
  }

  render() {
    return (
      <section className="cid-qAL8FfWGXu mbr-parallax-background" id="footer1-g" data-rv-view="249">
          <div className="mbr-overlay" style={{backgroundColor: "rgb(60, 60, 60)", opacity: 0.7}}></div>

          <div className="container">
              <div className="media-container-row content text-white">
                  <div className="col-12 col-md-3">
                      <div className="media-wrap">
                          <a href="http://kumarabhirup.com">
                              <img src={this.images.kumar} alt="Kumar Abhirup" title="Kumar Abhirup" media-simple="true" />
                          </a>
                      </div>
                  </div>
                  <div className="col-12 col-md-3 mbr-fonts-style display-7">
                      <h5 className="pb-3">
                          Address
                      </h5>
                      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                      <p className="mbr-text"><em>Nashik, India&nbsp;🇮🇳</em><br />WiFi? There I stay&nbsp;😉</p>
                  </div>
                  <div className="col-12 col-md-3 mbr-fonts-style display-7">
                      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                      <h5 className="pb-3">Mail me here ✉️</h5>
                      <p className="mbr-text"><a href="mailto:hey@kumarabhirup.com" className="text-success">hey@kumarabhirup.com</a><br />I typically reply within a day.<br /></p>
                  </div>
                  <div className="col-12 col-md-3 mbr-fonts-style display-7">
                      <h5 className="pb-3">Tech Stack</h5>
                      <p className="mbr-text">JavaScript, Node.JS, React.JS<br />GraphQL/Prisma<br />PHP, WordPress &amp; Laravel</p>
                  </div>
              </div>
              <div className="footer-lower">
                  <div className="media-container-row">
                      <div className="col-sm-12">
                          <hr />
                      </div>
                  </div>
                  <div className="media-container-row mbr-white">
                      <div className="col-sm-6 copyright">
                          <p className="mbr-text mbr-fonts-style display-7">
                              Why copywriting?? Code is hosted on <a href="https://github.com/KumarAbhirup/kumarabhirup" className="text-success">GitHub</a>&nbsp;😎</p>
                      </div>
                      <div className="col-md-6">
                          <div className="social-list align-right">
                              <div className="soc-item">
                                  <a href="https://twitter.com/kumar_abhirup" target="_blank">
                                      <span className="mbr-iconfont mbr-iconfont-social socicon-twitter socicon" media-simple="true"></span>
                                  </a>
                              </div>
                              <div className="soc-item">
                                  <a href="https://www.facebook.com/krish.abhirup" target="_blank">
                                      <span className="mbr-iconfont mbr-iconfont-social socicon-facebook socicon" media-simple="true"></span>
                                  </a>
                              </div>
                              <div className="soc-item">
                                  <a href="https://www.youtube.com/c/IQubex" target="_blank">
                                      <span className="mbr-iconfont mbr-iconfont-social socicon-youtube socicon" media-simple="true"></span>
                                  </a>
                              </div>
                              <div className="soc-item">
                                  <a href="https://github.com/KumarAbhirup" target="_blank">
                                      <span className="mbr-iconfont mbr-iconfont-social socicon-github socicon" media-simple="true"></span>
                                  </a>
                              </div>
                              <div className="soc-item">
                                  <a href="https://www.linkedin.com/in/kumar-abhirup/" target="_blank">
                                      <span className="mbr-iconfont mbr-iconfont-social socicon-linkedin socicon" media-simple="true"></span>
                                  </a>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }

}
