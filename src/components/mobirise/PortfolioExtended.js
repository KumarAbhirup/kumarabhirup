import React, { Component } from 'react'
import StackGrid from "react-stack-grid";
import { Element } from 'react-scroll'

export default class PortfolioExtended extends Component {
  render() {
    const { data } = this.props
    return (
        <Element name="portfolio" id="portfolio">
        <section className="features3 cid-reFWtuV64z" id="features17-1a" data-rv-view="274">
            {/* <div className="container-fluid" */}
                <StackGrid
                    columnWidth={350}
                    itemComponent={"div"}
                    gutterHeight={20}
                    gutterWidth={20}
                    monitorImagesLoaded
                >
                {/* <div className="media-container-row"> */}
                    { data.portfolio.map((project, index) => (
                        <div key={index} className="card">
                            <div className="card-wrapper">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="card-img">
                                        <img src={project.image} alt={project.title} media-simple="true" />
                                    </div>
                                </a>
                                <div className="card-box">
                                    <h4 className="card-title pb-3 mbr-fonts-style display-7">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: "#000", fontWeight: 700}}>{ project.title }</a>
                                    </h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        { project.description }
                                    </p>
                                </div>
                            </div>
                        </div>
                    )) }
                {/* </div> */}
                </StackGrid>
            {/* </div> */}
        </section>
        </Element>
    )
  }
}
