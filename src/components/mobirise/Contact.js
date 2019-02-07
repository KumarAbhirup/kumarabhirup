import React, { Component } from 'react'
import ReCAPTCHA from 'react-recaptcha'
import wait from 'waait'

import validateEmail from '../../lib/validateEmail'

export default class Contact extends Component {
  
  // State Management
  state = {
    human: false
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
    const codeToExec = `this.${e.target.name}Validation(e)`
    eval(codeToExec)
  }

  // Name validation
  nameValidation = e => {
    if(e.target.value.length < 4) {
      this.setState({ nameError: `Fullname so small? 🤔` })
    } else {
      this.setState({ nameError: null })
    }
  }

  // Email validation
  emailValidation = e => {
    if(!validateEmail(e.target.value)) {
      this.setState({ emailError: `Please enter your CORRECT EMAIL ADDRESS! 😡` })
    } else {
      this.setState({ emailError: null })
    }
  }

  // Phone validation
  phoneValidation = async e => {

    // await wait(2000)

    const isPhoneValid = await fetch(`http://apilayer.net/api/validate?access_key=${process.env.APILAYER_KEY}&number=${e.target.value}`)
    .then(res => (res.json()))
    .then(json => (json.valid))
    .catch(err => console.log("Some error just triggered!", err.message))

    if(this.state.phone != null && !isPhoneValid){
      this.setState({ phoneError: `Please write a valid phone number.` })
    } else {
      this.setState({ phoneError: null })
    }

  }

  // Subject validation
  subjectValidation = e => {
    if(e.target.value.length < 6) {
      this.setState({ subjectError: `I hate lazy ppl writing less in subject field!` })
    } else {
      this.setState({ subjectError: null })
    }
  }

  // Message validation
  messageValidation = e => {
    if(e.target.value.length < 9) {
      this.setState({ messageError: `Can you not express yourself longer?` })
    } else {
      this.setState({ messageError: null })
    }
  }

  // ReCAPTCHA Client Side
  onCaptchaLoad = () => {
    console.log('Captcha loaded.')
  }
  verifyCaptcha = (res) => {
    if(res) {
      this.setState({ human: true })
    } 
  }

  onSubmit = () => {
    console.log('Form submitted.')
  }

  render() {
    const { data } = this.props
    return (
      <>
      <section className="mbr-section form4 cid-rezNDSe3Nt" id="form4-n" data-rv-view="243">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      { /* MAP IS NOT YET CONNECTED TO API! */ }
                      <div className="google-map"><iframe title="Google Maps" frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=IQubex,+Nashik" allowFullScreen=""></iframe></div>
                  </div>
                  <div className="col-md-6">
                      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                      <h2 className="pb-3 align-left mbr-fonts-style display-2">{ data.title }</h2>
                      <div>
                          <div className="icon-block pb-3">
                              <span className="icon-block__icon">
                                  <span className={`mbr-iconfont ${data.icon}`} media-simple="true"></span>
                              </span>
                              <h4 className="icon-block__title align-left mbr-fonts-style display-5">{ data.iconText }</h4>
                          </div>
                          <div className="icon-contacts pb-3">
                              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                              <h5 className="align-left mbr-fonts-style display-7">{ data.text }</h5>
                              <p className="mbr-text align-left mbr-fonts-style display-7"></p>
                          </div>
                      </div>
                      <div data-form-type="formoid">
                          {/* <div data-form-alert="" hidden="">Hey, will get back instantly!</div> */}
                          <form className="block mbr-form" method="post" data-form-title="Contact form">
                          {/* <input type="hidden" data-form-email="true" value="ZN0j7NmqVY0QZgNfgpXbVrEb+fSwGtRfuih/bXb+bmGmboy9gY6j4cqn1SrPOU8DiX6rDqOH36QZsG1nELSaPcnxhFlDo49/pAmowng6OxkRBSGjbEv3MGt5qrI8tjfJ" /> */}
                              <div className="row">
                                  <div className="col-md-6 multi-horizontal" data-for="name">
                                      <input type="text" className="form-control input" name="name" data-form-field="Name" placeholder={data.placeholders.name} required id="name-form4-n" value={this.state.name} onChange={e => this.saveToState(e)} />
                                  </div>
                                  <div className="col-md-6 multi-horizontal" data-for="phone">
                                      <input type="text" className="form-control input" name="phone" data-form-field="Phone" placeholder={data.placeholders.phone} id="phone-form4-n" value={this.state.phone} onChange={e => this.saveToState(e)} />
                                  </div>
                                  <div className="col-md-12" data-for="email">
                                      <input type="email" className="form-control input" name="email" data-form-field="Email" placeholder={data.placeholders.email} required id="email-form4-n" value={this.state.email} onChange={e => this.saveToState(e)} />
                                  </div>
                                  <div className="col-md-12" data-for="subject">
                                      <input type="text" className="form-control input" name="subject" data-form-field="Subject" placeholder={data.placeholders.subject} required id="subject-form4-n" value={this.state.subject} onChange={e => this.saveToState(e)} />
                                  </div>
                                  <div className="col-md-12" data-for="message">
                                      <textarea className="form-control input" name="message" rows="3" data-form-field="Message" placeholder={data.placeholders.message} style={{resize:"none"}} id="message-form4-n" value={this.state.message} onChange={e => this.saveToState(e)}></textarea>
                                  </div>
                                  <div className="col-md-12" data-for="recaptcha" style={{alignItems: "center"}}>
                                      <ReCAPTCHA 
                                        sitekey={process.env.RECAPTCHA_CLIENT_KEY}
                                        render="explicit"
                                        onloadCallback={this.onCaptchaLoad}
                                        verifyCallback={this.verifyCaptcha}
                                      />
                                  </div>
                                  <div className="input-group-btn col-md-12" style={{marginTop: "10px"}}>
                                      <button type="submit" className="btn btn-primary btn-form display-4" disabled={data.disabled} onClick={this.onSubmit}>{ data.submitText }</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </>
    )
  }

}
