import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setLoadingState,
  submitSearchRequest
} from '../../actions/SearchActions'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
import ChannelCard from '../../components/ChannelCard'
import VideoCard from '../../components/VideoCard'
import PlaylistCard from '../../components/PlaylistCard'
import Loading from '../../components/Loader'
import { decodeString } from '../../utils'

class Home extends Component {
  static propTypes = {
    storeObj: PropTypes.object
  }
  state = {
    isMobile: true
  }
  componentDidMount = () => {
    if (window.innerWidth > 500) {
      this.setState({ isMobile: false })
    }
    this.props.dispatch(setLoadingState(true))
    this.props.dispatch(submitSearchRequest('spongebob', {}))
  }

  render() {
    const { isMobile } = this.state
    const { storeObj } = this.props
    console.warn(storeObj)
    return (
      <React.Fragment>
        <Header title={storeObj.input} />
        {!storeObj.isLoading && isMobile ? <MobFilter /> : null}
        <main data-testid="results-container">
          {storeObj.results &&
          storeObj.results.length > 0 &&
          !storeObj.isLoading ? (
            storeObj.results.map(item =>
              item.id.hasOwnProperty('channelId') ? (
                <ChannelCard
                  key={item.id.channelId}
                  channleName={decodeString(item.snippet.title)}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  videoCount={item.statistics.videoCount}
                  subscriberCount={item.statistics.subscriberCount}
                />
              ) : item.id.hasOwnProperty('videoId') ? (
                <VideoCard
                  key={item.id.videoId}
                  videoId={item.id.videoId}
                  videoTitle={decodeString(item.snippet.title)}
                  channelName={decodeString(item.snippet.channelTitle)}
                  thumbnail={item.snippet.thumbnails.medium.url}
                  duration={item.contentDetails.duration}
                  viewCount={item.statistics.viewCount}
                />
              ) : item.id.hasOwnProperty('playlistId') ? (
                <PlaylistCard
                  key={item.id.playlistId}
                  playlistTitle={decodeString(item.snippet.title)}
                  channelName={decodeString(item.snippet.channelTitle)}
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
