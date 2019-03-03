import React, { Component } from 'react'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
import ChannelCard from '../../components/ChannelCard'
import VideoCard from '../../components/VideoCard'
export default class Home extends Component {
  render() {
    return (
      <main>
        <Header />
        <MobFilter />
        <ChannelCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </main>
    )
  }
}
