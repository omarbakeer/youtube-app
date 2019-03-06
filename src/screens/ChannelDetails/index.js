import React, { Component } from 'react'
import Header from '../../components/Header'
import ChannelCover from './components/ChannelCover'

export default class ChannelDetails extends Component {
  ChannelSections
  render() {
    return (
      <main>
        <Header title="YouTube" />
        <ChannelCover />
      </main>
    )
  }
}
