import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default class Skills extends Component {
  render() {
    const circularProgressbarStyles = {
      background: {
        fill: '#3e98c7',
      },
      text: {
        fill: '#fff',
      },
      path: {
        stroke: '#fff',
      },
      trail: { stroke: 'transparent' },
    }
    return (
      <section className="progress-bars3 cid-rezDHMdky7" id="progress-bars3-j" data-rv-view="234">

        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">
            Skills ⚒️</h2>

          <h3 className="mbr-section-subtitle mbr-fonts-style display-5">I'm an everyday learner. An evergreen student.</h3>

          <div className="media-container-row pt-5 mt-2">
            <div className="card p-3 align-center">
              <div className="wrap">
                <CircularProgressbar
                  percentage={95}
                  text={`${95}%`}
                  background
                  backgroundPadding={6}
                  strokeWidth={6}
                  styles={circularProgressbarStyles}
                />
              </div>
              <div className="mbr-crt-title pt-3">
                <h4 className="card-title py-2 mbr-fonts-style display-5">HTML</h4>
              </div>
            </div>

            <div className="card p-3 align-center">
              <div className="wrap">
                <CircularProgressbar
                  percentage={67}
                  text={`${67}%`}
                  background
                  backgroundPadding={6}
                  strokeWidth={6}
                  styles={circularProgressbarStyles}
                />
              </div>
              <div className="mbr-crt-title pt-3">
                <h4 className="card-title py-2 mbr-fonts-style display-5">
                  CSS</h4>
              </div>
            </div>

            <div className="card p-3 align-center">
              <div className="wrap">
                <CircularProgressbar
                  percentage={75}
                  text={`${75}%`}
                  background
                  backgroundPadding={6}
                  strokeWidth={6}
                  styles={circularProgressbarStyles}
                />
              </div>
              <div className="mbr-crt-title pt-3">
                <h4 className="card-title py-2 mbr-fonts-style display-5">
                  Node.JS</h4>
              </div>
            </div>

            <div className="card p-3 align-center">
              <div className="wrap">
                <CircularProgressbar
                  percentage={62}
                  text={`${62}%`}
                  background
                  backgroundPadding={6}
                  strokeWidth={6}
                  styles={circularProgressbarStyles}
                />
              </div>
              <div className="mbr-crt-title pt-3">
                <h4 className="card-title py-2 mbr-fonts-style display-5">React.JS</h4>
              </div>
            </div>

            <div className="card p-3 align-center">
              <div className="wrap">
                <CircularProgressbar
                  percentage={55}
                  text={`${55}%`}
                  background
                  backgroundPadding={6}
                  strokeWidth={6}
                  styles={circularProgressbarStyles}
                />
              </div>
              <div className="mbr-crt-title pt-3">
                <h4 className="card-title py-2 mbr-fonts-style display-5">
                  WordPress</h4>
              </div>
            </div>


          </div>
        </div>
      </section>
    )
  }
}
