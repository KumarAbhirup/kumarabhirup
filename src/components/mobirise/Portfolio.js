import React, { Component } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { withRouter } from 'react-router-dom';

import { portfolio } from '../../api/portfolio';

const BigButton = styled.button`
    display: block;
    padding: 10px;
    color: black;
    border-radius: 6px;
    border: 2px solid black;
    width: 50%;
    min-width: 300px;
    margin: 30px auto;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        background: black;
        color: white;
        padding: 15px;
        font-size: 20px;
        width: 75%;
    }
`

const PortfolioCard = styled.div`
    &:hover {
        transition: all .5s;
        box-shadow: 0 0 10px #000;
        cursor: pointer;
    }
`

class Portfolio extends Component {

  handleMoreClick = (event) => {
    event.preventDefault()
    this.props.history.replace('/portfolio')
  }

  render() {
    const projectsToShow = portfolio.portfolio.filter((item, index) => index < portfolio.projectsAtHomepage)
    return (
        <Element name="portfolio">
            <section className="features13 cid-reFlzoEQMR" id="features13-s" data-rv-view="237">
                    <div className="container">
                        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                        <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">{ portfolio.title }</h2>

                        <div className="media-container-row container">
                            {projectsToShow.map(project => (
                                <PortfolioCard className="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">
                                    <div className="card-img">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} media-simple="true" /></a>
                                    </div>
                                    <h4 className="card-title py-2 mbr-fonts-style display-5"><a href={project.link} style={{color: "#fff", fontWeight: 700, textDecoration: "underline"}} target="_blank" rel="noopener noreferrer">{ project.title }</a></h4>
                                    <p className="mbr-text mbr-fonts-style display-7"><a href={project.link} style={{color: "#fff"}} target="_blank" rel="noopener noreferrer">{ project.description }</a></p>
                                </PortfolioCard>
                            ))}
                        </div>
                        {portfolio.moreButtonText && <BigButton onClick={this.handleMoreClick}>{ portfolio.moreButtonText }</BigButton>}
                </div>
            </section>
        </Element>
    )
  }

}

export default withRouter(Portfolio)