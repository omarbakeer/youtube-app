import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import VideoDetails from './screens/VideoDetails'
import ChannelDetails from './screens/ChannelDetails'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/video/:videoId" component={VideoDetails} />
          <Route exact path="/channel/:channelId" component={ChannelDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}
