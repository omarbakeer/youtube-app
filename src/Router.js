import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import VideoDetails from './screens/VideoDetails'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/video/:videoId" component={VideoDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}
