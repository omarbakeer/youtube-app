import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
import ChannelCard from '../../components/ChannelCard'
import VideoCard from '../../components/VideoCard'
import PlaylistCard from '../../components/PlaylistCard'
import Loading from '../../components/Loader'

class Home extends Component {
  static propTypes = {
    storeObj: PropTypes.object
  }
  componentDidMount = () => {
    // TODO: search for spongebob
  }

  render() {
    const { storeObj } = this.props
    return (
      <React.Fragment>
        <Header title={storeObj ? storeObj.input : ''} />
        <main>
          {!storeObj.isLoading ? <MobFilter /> : null}
          {storeObj.results.length > 0 && !storeObj.isLoading ? (
            storeObj.results.map(item =>
              item.id.hasOwnProperty('channelId') ? (
                <ChannelCard
                  key={item.id.channelId}
                  channleName={item.snippet.title}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  videoCount={item.statistics.videoCount}
                  subscriberCount={item.statistics.subscriberCount}
                />
              ) : item.id.hasOwnProperty('videoId') ? (
                <VideoCard
                  key={item.id.videoId}
                  videoId={item.id.videoId}
                  videoTitle={item.snippet.title}
                  channelName={item.snippet.channelTitle}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  duration={item.contentDetails.duration}
                  viewCount={item.statistics.viewCount}
                />
              ) : item.id.hasOwnProperty('playlistId') ? (
                <PlaylistCard
                  key={item.id.playlistId}
                  // playlistId={item.id.playlistId}
                  playlistTitle={item.snippet.title}
                  channelName={item.snippet.channelTitle}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  itemCount={item.contentDetails.itemCount}
                />
              ) : null
            )
          ) : (
            <Loading />
          )}
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { storeObj: state.SearchReducer }
}

export default connect(mapStateToProps)(Home)
