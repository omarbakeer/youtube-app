import React, { Component } from 'react'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
import VideoCard from '../../components/VideoCard'
export default class Home extends Component {
  render() {
    return (
      <main>
        <Header />
        <MobFilter />
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
