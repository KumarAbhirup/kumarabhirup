import React, { Component } from 'react'
import { activities } from '../../api/activities'

export default class Activities extends Component {
  render() {
    return (
        <section className="timeline1 cid-reFoOc20K5" id="timeline1-u" data-rv-view="246">
            <div className="container align-center">
                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">{activities.title}</h2>
                <h3 className="mbr-section-subtitle pb-5 mbr-fonts-style display-5">{activities.text}</h3>

            <div className="container timelines-container" mbri-timelines="">



                    <div className="row timeline-element reverse separline">
                        <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                            <div className="time-line-date-content">
                                <p className="mbr-timeline-date mbr-fonts-style display-5">15 January 2019</p>
                            </div>
                        </div>
                        <span className="iconBackground"></span>
                        <div className="col-xs-12 col-md-6 align-right">
                            <div className="timeline-text-content">
                                <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">Now on <a href="https://twitter.com/kumar_abhirup" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;🐦</h4>
                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                <p className="mbr-timeline-text mbr-fonts-style display-7"><strong>I'm yet to create an interface to provide latest updates</strong> here in this section. Till the time, I'll be announcing things on Twitter. Just as I always do... 😉</p>
                            </div>
                        </div>
                    </div>



                    <div className="row timeline-element separline">
                        <div className="timeline-date-panel col-xs-12 col-md-6 align-right">
                            <div className="time-line-date-content">
                                <p className="mbr-timeline-date mbr-fonts-style display-5">1 January 2019</p>
                            </div>
                        </div>
                        <span className="iconBackground"></span>
                        <div className="col-xs-12 col-md-6 align-left ">
                            <div className="timeline-text-content">
                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                    Happy new Year 🎊🥂</h4>
                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                <p className="mbr-timeline-text mbr-fonts-style display-7">
                                    May this year bring the best to you and me as well&nbsp;😆</p>
                            </div>
                        </div>
                    </div>




                    <div className="row timeline-element reverse">
                        <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                            <div className="time-line-date-content">
                                <p className="mbr-timeline-date mbr-fonts-style display-5">25 December 2018</p>
                            </div>
                        </div>
                        <span className="iconBackground"></span>
                        <div className="col-xs-12 col-md-6 align-right">
                            <div className="timeline-text-content">
                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                                    Merry Christmas 🎄</h4>
                                <p className="mbr-timeline-text mbr-fonts-style display-7">Wish you a very happy Xmas!<br /><br />Jingle bells 🔔 &nbsp;jingle bells<br />Jingle all the way,<br />Oh what fun it is to ride<br />In a one-horse open sleigh.</p>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
        </section>
    )
  }
}
