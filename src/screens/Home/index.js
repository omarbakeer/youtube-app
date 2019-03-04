import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
import ChannelCard from '../../components/ChannelCard'
import VideoCard from '../../components/VideoCard'

const { REACT_APP_GOOGLE_API_KEY } = process.env

export default class Home extends Component {
  state = {
    searchInput: 'kentcdodds',
    searchResult: []
  }

  componentDidMount = () => {
    // TODO: search for spongebob
  }

  submitSearchReq = async () => {
    const searchResult = []
    let details
    try {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            q: this.state.searchInput,
            key: REACT_APP_GOOGLE_API_KEY
          }
        }
      )
      for (let item of res.data.items) {
        if (item.id.hasOwnProperty('channelId')) {
          details = await this.getItemDetails(item.id.channelId, 'channels')
          searchResult.push({
            ...item,
            statistics: details.data.items[0].statistics
          })
        } else if (item.id.hasOwnProperty('videoId')) {
          details = await this.getItemDetails(item.id.videoId, 'videos')
          searchResult.push({
            ...item,
            contentDetails: details.data.items[0].contentDetails
          })
        } else {
          console.warn('it should be a list!!!')
        }
      }
      console.warn(searchResult)
      this.setState({ searchResult: searchResult })
    } catch (error) {
      console.log(error)
    }
  }

  getItemDetails = async (itemId, type) => {
    try {
      return await axios.get(`https://www.googleapis.com/youtube/v3/${type}`, {
        params: {
          id: itemId,
          part: type === 'videos' ? 'contentDetails' : 'statistics',
          key: REACT_APP_GOOGLE_API_KEY
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleInputChange = e => {
    const searchInput = e.target.value
    this.setState({ searchInput })
  }

  render() {
    const { searchInput, searchResult } = this.state
    console.log(searchResult)
    return (
      <main>
        <Header
          title={searchInput}
          handleInputChange={this.handleInputChange}
          submitSearchReq={this.submitSearchReq}
        />
        <MobFilter />

        {searchResult &&
          searchResult.map(item =>
            item.statistics ? (
              <ChannelCard
                key={item.id.channelId}
                channleName={item.snippet.title}
                thumbnail={item.snippet.thumbnails.medium.url}
                videoCount={item.statistics.videoCount}
                subscriberCount={item.statistics.subscriberCount}
              />
            ) : item.contentDetails ? (
              <VideoCard
                key={item.id.videoId}
                videoTitle={item.snippet.title}
                channelName={item.snippet.channelTitle}
                thumbnail={item.snippet.thumbnails.medium.url}
                duration={item.contentDetails.duration}
              />
            ) : null
          )}
      </main>
    )
  }
}
