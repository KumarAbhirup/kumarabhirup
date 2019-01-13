import React, { Component } from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default class Skill extends Component {
  render() {

    const { name, percent } = this.props.skill

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
      <div className="card p-3 align-center">
        <div className="wrap">
          <CircularProgressbar
            percentage={percent}
            text={`${percent}%`}
            background
            backgroundPadding={6}
            strokeWidth={6}
            styles={circularProgressbarStyles}
          />
        </div>
        <div className="mbr-crt-title pt-3">
          <h4 className="card-title py-2 mbr-fonts-style display-5">{ name }</h4>
        </div>
      </div>
    )

  }
}
