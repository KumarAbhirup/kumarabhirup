import React, { Component } from 'react'

import { contactSection } from '../../api/others'

export default class Contact extends Component {
  render() {
    return (
      <section className="mbr-section form4 cid-rezNDSe3Nt" id="form4-n" data-rv-view="243">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      { /* MAP IS NOT YET CONNECTED TO API! */ }
                      <div className="google-map"><iframe frameborder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=IQubex,+Nashik" allowfullscreen=""></iframe></div>
                  </div>
                  <div className="col-md-6">
                      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                      <h2 className="pb-3 align-left mbr-fonts-style display-2">{ contactSection.title }</h2>
                      <div>
                          <div className="icon-block pb-3">
                              <span className="icon-block__icon">
                                  <span className={`mbr-iconfont ${contactSection.icon}`} media-simple="true"></span>
                              </span>
                              <h4 className="icon-block__title align-left mbr-fonts-style display-5">{ contactSection.iconText }</h4>
                          </div>
                          <div className="icon-contacts pb-3">
                              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                              <h5 className="align-left mbr-fonts-style display-7">{ contactSection.text }</h5>
                              <p className="mbr-text align-left mbr-fonts-style display-7"></p>
                          </div>
                      </div>
                      <div data-form-type="formoid">
                          {/* <div data-form-alert="" hidden="">Hey, will get back instantly!</div> */}
                          <form className="block mbr-form" method="post" data-form-title="Contact form">
                          {/* <input type="hidden" data-form-email="true" value="ZN0j7NmqVY0QZgNfgpXbVrEb+fSwGtRfuih/bXb+bmGmboy9gY6j4cqn1SrPOU8DiX6rDqOH36QZsG1nELSaPcnxhFlDo49/pAmowng6OxkRBSGjbEv3MGt5qrI8tjfJ" /> */}
                              <div className="row">
                                  <div className="col-md-6 multi-horizontal" data-for="name">
                                      <input type="text" className="form-control input" name="name" data-form-field="Name" placeholder={contactSection.placeholders.name} required="" id="name-form4-n" />
                                  </div>
                                  <div className="col-md-6 multi-horizontal" data-for="phone">
                                      <input type="text" className="form-control input" name="phone" data-form-field="Phone" placeholder={contactSection.placeholders.phone} id="phone-form4-n" />
                                  </div>
                                  <div className="col-md-12" data-for="email">
                                      <input type="text" className="form-control input" name="email" data-form-field="Email" placeholder={contactSection.placeholders.email} required="" id="email-form4-n" />
                                  </div>
                                  <div className="col-md-12" data-for="message">
                                      <textarea className="form-control input" name="message" rows="3" data-form-field="Message" placeholder={contactSection.placeholders.message} style={{resize:"none"}} id="message-form4-n"></textarea>
                                  </div>
                                  <div className="input-group-btn col-md-12" style={{marginTop: "10px"}}>
                                      <button href="" type="submit" className="btn btn-primary btn-form display-4" disabled={contactSection.disabled}>{ contactSection.submitText }</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
