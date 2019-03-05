import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
import ChannelCard from '../../components/ChannelCard'
import VideoCard from '../../components/VideoCard'

class Home extends Component {
  componentDidMount = () => {
    // TODO: search for spongebob
  }

  render() {
    const { storeObj } = this.props
    return (
      <main>
        <Header title={storeObj ? storeObj.input : ''} />
        <MobFilter />

        {storeObj.results &&
          storeObj.results.map(item =>
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
                videoId={item.id.videoId}
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

const mapStateToProps = state => {
  return { storeObj: state.SearchReducer }
}

export default connect(mapStateToProps)(Home)
