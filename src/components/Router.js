import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import homePage from '../views/home';
import usesPage from '../views/uses';
import portfolioPage from '../views/portfolio';
import page404 from '../views/404';

export default class Router extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={homePage}/>
          <Route path='/uses' component={usesPage}/>
          <Route path='/portfolio' component={portfolioPage}/>
          <Route component={page404} />
        </Switch>
      </main>
    )
  }
}
